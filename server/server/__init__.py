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
    """
    A simple hello world function
    """
    return 'hello from Langguini!'


@app.get("/health")
async def health_check():
    """
    A simple health check function
    """
    return {"status": "ok"}


@app.post("/fb/")
def transcribe_audio(word: str = Form(...),  audio: UploadFile = File(...)):
    """
    Transcribe the audio file and generate feedback on the pronunciation of the word
    """
    pipe = FeedbackPipeline()
    return pipe.generate(word, audio.file.read())


@app.post("/generate/")
def generate_lesson(prompt: str = Form(...), target_language: str = Form("English"), level: int = Form(1)):
    """
    Generate a lesson based on the prompt, target language, and difficulty level
    """
    generator = ContentGenerator()
    return generator.generate(prompt, target_language, level)
