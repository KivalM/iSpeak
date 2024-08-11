from fastapi import FastAPI

app = FastAPI(
    title="Pronunciation Feedback Tool",
    description="A tool that provides feedback on the pronunciation of a word given the IPA phonemes of the word.",
    version="0.1",
)


@app.get("/")
async def hello_fly():
    return 'hello from fly.io'


@app.get("/health")
async def health_check():
    return {"status": "ok"}
