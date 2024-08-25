import random
import os
from fastapi import FastAPI
from transformers import pipeline
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

import phonemizer

# Load the model
pipeline_name = "automatic-speech-recognition"
model_name = "facebook/wav2vec2-lv-60-espeak-cv-ft"
pipe = pipeline(pipeline_name, model=model_name)

# ensure the data folder exists
os.system("mkdir -p data")

# Create the FastAPI app
app = FastAPI(
    title="Pronunciation Feedback Tool",
    description="A tool that provides feedback on the pronunciation of a word given the IPA phonemes of the word.",
    version="0.1",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the routes


@app.get("/")
async def hello_fly():
    return 'hello from fly.io'


@app.get("/health")
async def health_check():
    return {"status": "ok"}


# Clears the data folder in case something goes wrong
@app.get("/clear/")
def clear_data():
    os.system("rm data/*")
    return "Data Cleared"


# Transcribe the audio file and return the IPA phonemes
@app.post("/transcribe/")
def transcribe_audio(word: str, audio_file: UploadFile = File(...)):
    # Save the audio file as a unique file

    # TODO: Add a check to see if the file is an audio file
    # TODO: Change sample rate to 16kHz
    # TODO: Look into using the /tmp directory
    # TODO: Look into using the file in memory without saving it

    file_name = f"data/" + \
        str(random.randint(0, 100000)) + f"{audio_file.filename}"

    # Save the audio file
    with open(file_name, "wb") as f:
        f.write(audio_file.file.read())

    print(f"Saved file as {file_name}")
    # get the IPA phonemes
    ipa = pipe(file_name)

    # remove the audio file
    os.system(f"rm {file_name}")

    return {
        "word": word,
        "ipa": ipa['text'],
        # return the correct phonemes as well
        "phonemes": phonemizer.phonemize(word, language='en-us', backend='espeak', strip=True)
    }
