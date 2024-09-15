from fastapi import FastAPI
from fastapi import FastAPI, File, UploadFile, Form
from .core.feedback import FeedbackPipeline
from .core.gen import ContentGenerator
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Pronunciation Feedback Tool",
    description="A tool that provides feedback on the pronunciation of a word given the IPA phonemes of the word.",
    version="0.1",
)


@app.get("/")
async def hello():
    return 'hello from Langguini!'


@app.get("/health")
async def health_check():
    return {"status": "ok"}


@app.post("/fb/")
def transcribe_audio(word: str = Form(...),  audio: UploadFile = File(...)):
    pipe = FeedbackPipeline()
    return pipe.generate(word, audio.file.read())


@app.post("/generate/")
def generate_lesson(prompt: str = Form(...), target_language: str = Form("English"), level: int = Form(1)):
    generator = ContentGenerator()
    return generator.generate(prompt, target_language, level)
