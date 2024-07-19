from transformers import pipeline
from gradio_client import Client

pipe = pipeline("automatic-speech-recognition",
                model="facebook/wav2vec2-lv-60-espeak-cv-ft")


# the audio file, change this to the path of your file
# format: audio_file = "audio/<your_file>.mp3" where the initial part of the name before the _ is the word spoken
audio_file = "audio/hello_normal.mp3"
word = audio_file.split("/")[1].split("_")[0]


# Transcribe speech to IPA phonemes from audio file
ipa = pipe(audio_file)
print("IPA phonemes:", ipa)


prompt = f"""
You are a pronouciation feedback tool. You have listened to an audio file of a person saying the word "{word}".
Now you are provided the IPA phonemes of the word. You have to provide feedback on the pronounciation of the word as if you were providing it to a small child.

IPA phonemes: {ipa}

Provide feedback on the pronounciation of the word.

"""


client = Client("vilarin/Mistral-Nemo")
result = client.predict(
    message=prompt,
    temperature=0.35,
    max_new_tokens=1024,
    top_p=1,
    top_k=20,
    penalty=1.2,
    api_name="/chat"
)
print(result)
