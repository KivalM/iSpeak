from transformers import pipeline
from fastapi import FastAPI, File, UploadFile
import random
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

pipeline_name = "automatic-speech-recognition"
model_name = "ct-vikramanantha/phoneme-scorer-v2-wav2vec2"

# create a FastAPI app
app = FastAPI(
    title="Pronunciation Feedback Tool",
    description="A tool that provides feedback on the pronunciation of a word given the IPA phonemes of the word.",
    version="0.1",
)
# access control allow origin

origins = [
    "http://localhost",
    "https://localhost",
    "http://localhost:8000",
    "http://localhost:5173",
    "https://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# create a route to recieve an audio file and return the IPA phonemes


@app.post("/transcribe/")
def transcribe_audio(audio_file: UploadFile = File(...)):

    file_name = f"data/{audio_file.filename}{str(random.randint(0, 100000))}.ogx"

    with open(file_name, "wb") as f:
        f.write(audio_file.file.read())

    # convert the audio file to wav
    import os
    os.system(f"ffmpeg -i {file_name} {file_name}.wav")
    file_name = f"{file_name}.wav"

    pipe = pipeline(pipeline_name, model=model_name)
    ipa = pipe(file_name)
    # remove the audio file
    os.system(f"rm {file_name}")

    return ipa


# run the app
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
