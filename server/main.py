from transformers import pipeline
from fastapi import FastAPI, File, UploadFile
from fastapi.staticfiles import StaticFiles
from gradio_client import Client
import random
from gtts import gTTS
from fastapi.middleware.cors import CORSMiddleware

pipeline_name = "automatic-speech-recognition"
model_name = "facebook/wav2vec2-lv-60-espeak-cv-ft"

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
    return ipa

# create a route to recieve the IPA phonemes and return the feedback


@app.post("/feedback/")
def provide_feedback(word: str, ipa: str):
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
    return result

# route to generate tts and return the audio file using gtts


@app.post("/tts/")
def generate_tts(text: str):
    tts = gTTS(text)
    filename = f"data/output_{random.randint(0, 100000)}.mp3"
    tts.save(filename)
    return filename


# serve the data folder using the /data route
app.mount("/data", StaticFiles(directory="data"), name="data")


# run the app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
