from typing import List, Dict, Any, Optional
from transformers import pipeline
import phonemizer
from nltk.metrics.distance import edit_distance
from langchain_anthropic import ChatAnthropic
from langchain_core.pydantic_v1 import BaseModel, Field
import dotenv
import os

dotenv.load_dotenv()


class Suggestions(BaseModel):
    word: str = Field(
        "",
        description="The word that the suggestion is for",
    )
    suggestions: List[str] = Field(
        [],
        description="List of suggestions for the word",
    )
    importance: int = Field(
        0,
        description="The importance of the suggestion from 1 to 100",
    )


class Feedback(BaseModel):
    general_feedback: List[str] = Field(
        "",
        description="Overall feedback on the text",
    )
    suggestions: List[Suggestions] = Field(
        [],
        description="Suggestions for each word in the text",
    )


class FeedbackGenerator:
    def __init__(self):
        self.llm = ChatAnthropic(
            model="claude-3-5-sonnet-20240620"
        ).with_structured_output(Feedback)

    def generate(self,
                 user_ipa: str,
                 target_ipa: str,
                 target_language: str,
                 native_language: str,
                 similarity: float,
                 level: int = 1) -> Feedback:
        transcript = user_ipa.replace(" ", "")
        target = target_ipa.replace(" ", "")

        # now insert a space between each character
        # to allow the model to understand the phonemes
        transcript = " ".join(transcript)
        target = " ".join(target)

        prompt = f"""
        Given the following ipa transcription that has been generated from the audio file: {transcript},
        The user is trying to say the word: {target},
        The provided IPA transcription is modified to include spaces between each character.
        The similarity between the ipa transcription and the phonemes is: {similarity},
        The user's native language is: {native_language},
        The target language is: {target_language}, and the user's efficiency level is: {level}.
        Please provide feedback on the transcription but don't mention the anythin in IPA.
        Provide detailed feedback on the errors and suggest possible corrections.
        When providing feedback, please consider the user's native language and the target language.
        Assume you are speaking to a middle school student.
        If the issues are minor, ignore them.
        """
        return self.llm.invoke(prompt)


class FeedbackPipeline:
    pipeline_name: str = "automatic-speech-recognition"
    model_name: str = "facebook/wav2vec2-lv-60-espeak-cv-ft"

    def __init__(
        self,
    ):
        self.pipe = pipeline(
            self.pipeline_name,
            model=self.model_name,
        )

    def transcribe(self, audio_file: bytes) -> str:
        ipa = self.pipe(audio_file)['text']
        return ipa

    def get_phonemes(self, word: str) -> str:
        return phonemizer.phonemize(
            word, language='en', backend='espeak', strip=True, language_switch='remove-flags'
        )

    def score(self, ipa: str, phonemes: str) -> float:
        ipa = ipa.replace(" ", "")
        phonemes = phonemes.replace(" ", "")
        print(f"ipa: {ipa}")
        print(f"phonemes: {phonemes}")

        print(f"edit_distance: {edit_distance(ipa, phonemes)}")
        return 1 - edit_distance(ipa, phonemes) / max(len(ipa), len(phonemes))

    def generate(self, word: str, audio_file: bytes) -> Dict[str, Any]:
        ipa = self.transcribe(audio_file)
        phonemes = self.get_phonemes(word)
        score = self.score(ipa, phonemes)
        feedback = FeedbackGenerator().generate(
            ipa, word, "en", "en", score)

        return {
            "word": word,
            "ipa": ipa,
            "phonemes": phonemes,
            "score": score,
            "feedback": feedback.dict(),
        }
