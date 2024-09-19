from typing import List, Dict, Any
from transformers import pipeline
import phonemizer
import Levenshtein
from langchain_anthropic import ChatAnthropic
from langchain_core.pydantic_v1 import BaseModel, Field
import dotenv

dotenv.load_dotenv()


class Suggestions(BaseModel):
    '''
    Suggestions for each word in the text
    '''
    segment: str = Field(
        "",
        description="The segment of the word that needs to be corrected",
    )

    suggestions: str = Field(
        "",
        description="The suggested correction for the segment",
    )

    importance: int = Field(
        0,
        description="How wrong the segment is and how important it is to correct it(0-100)",
    )


class Feedback(BaseModel):
    '''
    Overall feedback on the text
    '''
    general_feedback: str = Field(
        "",
        description="Overall feedback on the text",
    )
    suggestions: List[Suggestions] = Field(
        [],
        description="Suggestions for each word in the text",
    )


class FeedbackGenerator:
    """
    Feedback generator class that uses the langchain_anthropic model to generate feedback
    """

    def __init__(self):
        self.llm = ChatAnthropic(
            model="claude-3-5-sonnet-20240620"
        ).with_structured_output(Feedback)

    def generate(self,
                 word: str,
                 user_ipa: str,
                 target_ipa: str,
                 target_language: str,
                 native_language: str,
                 similarity: float,
                 content: str = "",
                 level: int = 1) -> Feedback:

        prompt = f"""
        Given the following ipa transcription that has been generated from the audio file: {user_ipa},
        The user is trying to say the word: {word}, and the correct ipa transcription is: {target_ipa},
        The provided IPA transcription is modified to include spaces between each character.
        The similarity between the ipa transcription and the phonemes is: {similarity},
        The user's native language is: {native_language},
        The target language is: {target_language}, and the user's efficiency level is: {level}.
        Please provide feedback on the transcription but don't mention the anythin in IPA.
        Provide detailed feedback on the errors and suggest possible corrections.
        See below the differences between the ipa transcription and the phonemes:
        {content}
        """
        return self.llm.invoke(prompt)


class FeedbackPipeline:
    pipeline_name: str = "automatic-speech-recognition"
    model_name: str = "facebook/wav2vec2-lv-60-espeak-cv-ft"

    def load_model():
        pipe = pipeline(
            FeedbackPipeline.pipeline_name,
            model=FeedbackPipeline.model_name,
        )
        pipe("hello")

    def __init__(
        self,
    ):
        self.pipe = pipeline(
            self.pipeline_name,
            model=self.model_name,
        )

    def transcribe(self, audio_file: bytes) -> str:
        # convert the audio file to IPA
        ipa = self.pipe(audio_file)['text']
        return ipa

    def get_phonemes(self, word: str) -> str:
        # get the phonemes for the word
        return phonemizer.phonemize(
            word, language='en-gb', backend='espeak', strip=True, language_switch='remove-flags'
        )

    def score(self, user_ipa: str, target_ipa: str) -> float:
        # get the similarity score between the user ipa and the target ipa
        return Levenshtein.ratio(user_ipa, target_ipa)

    def fix_spaces(self, ipa: str, target_ipa: str) -> str:
        # remove all the spaces from the ipa
        ipa = ipa.replace(" ", "")
        # get all the ops to convert the ipa to the target ipa
        ops = Levenshtein.editops(ipa, target_ipa)
        non_matching = Levenshtein.opcodes(ops, ipa, target_ipa)

        # apply all the ops that insert a space in the ipa
        for tag, i1, i2, j1, j2 in non_matching:
            if tag == 'insert' and target_ipa[j1:j2] == " ":
                ipa = ipa[:i1] + " " + ipa[i1:]
        return ipa, target_ipa

    def info_string(self, user_ipa: str, target_ipa: str) -> str:
        # get the differences between the user ipa and the target ipa
        ops = Levenshtein.editops(user_ipa, target_ipa)
        # get the non matching parts of the ipa
        non_matching = Levenshtein.opcodes(ops, user_ipa, target_ipa)
        # get the contents of the non matching parts
        contents = []
        for tag, i1, i2, j1, j2 in non_matching:
            print(tag, user_ipa[i1:i2], target_ipa[j1:j2])
            if tag == 'equal':
                contents.append(('equal', user_ipa[i1:i2]))
            elif tag == 'replace':
                contents.append(
                    ('replace', user_ipa[i1:i2], target_ipa[j1:j2]))
            elif tag == 'delete':
                contents.append(('delete', user_ipa[i1:i2]))
            elif tag == 'insert':
                contents.append(('insert', target_ipa[j1:j2]))
        # build the string for the LLM
        contents_str = "The key differences in the string are highlighted below: "
        for tag, *args in contents:
            if tag == 'equal':
                contents_str += f" Same({args[0]}), "
            elif tag == 'replace':
                contents_str += f" Replace({args[0]} with {args[1]}), "
            elif tag == 'delete':
                contents_str += f" Delete({args[0]}), "
            elif tag == 'insert':
                contents_str += f" Insert({args[0]}), "
        contents_str = contents_str.removesuffix(", ")
        return (contents, contents_str)

    def generate(self, word: str, audio_file: bytes) -> Dict[str, Any]:
        # The function that generates the feedback
        user_ipa = self.transcribe(audio_file)
        target_ipa = self.get_phonemes(word)

        user_ipa = user_ipa.replace("ː", "").replace("ˈ", "").replace(
            "ˌ", "").removeprefix(" ").removesuffix(" ")

        target_ipa = target_ipa.replace("ː", "").replace("ˈ", "").replace(
            "ˌ", "").removeprefix(" ").removesuffix(" ")

        user_ipa, target_ipa = self.fix_spaces(user_ipa, target_ipa)

        op_codes, content = self.info_string(user_ipa, target_ipa)
        score = self.score(user_ipa, target_ipa)

        feedback = FeedbackGenerator().generate(
            word=word,
            user_ipa=user_ipa,
            target_ipa=target_ipa,
            target_language="English",
            native_language="English",
            similarity=score,
            content=content,
        )

        return {
            "word": word,
            "user_ipa": user_ipa,
            "target_ipa": target_ipa,
            "op_codes": op_codes,
            "score": score,
            "feedback": feedback.dict(),
        }
