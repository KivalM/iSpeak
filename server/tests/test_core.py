from server.core.feedback import FeedbackPipeline

data_dir = "tests/data"


def get_all_files():
    import os
    return os.listdir(data_dir)


# def test_feedback_pipeline():
#     feedback = FeedbackPipeline()
#     assert feedback.pipeline_name == "automatic-speech-recognition"
#     assert feedback.model_name == "facebook/wav2vec2-lv-60-espeak-cv-ft"
#     assert feedback.pipe is not None
#     assert feedback.transcribe is not None


# def test_transcription():
#     feedback = FeedbackPipeline()
#     files = get_all_files()
#     for file in files:
#         file_path = f"{data_dir}/{file}"
#         transcription = feedback.transcribe(file_path)
#         print(f"Transcription for {file}: {transcription}")
#         assert transcription is not None
#         assert len(transcription) > 0


# def test_feedback():
#     feedback = FeedbackPipeline()
#     files = get_all_files()
#     for file in files[-1:]:
#         file_path = f"{data_dir}/{file}"
#         feedback_data = feedback.generate(
#             "hello, how are you today", file_path)
#         print(f"Feedback for {file}: {feedback_data}")
#         assert feedback_data is not None
#         assert feedback_data["ipa"] is not None
#         assert feedback_data["phonemes"] is not None
#         assert len(feedback_data["ipa"]) > 0
#         assert len(feedback_data["phonemes"]) > 0
#         # assert feedback_data["word"] == "hello"
#         assert feedback_data["ipa"] == feedback.transcribe(file_path)
#         # assert feedback_data["phonemes"] == feedback.get_phonemes("hello")


def test_api():
    from fastapi.testclient import TestClient
    from server import app
    client = TestClient(app)
    response = client.get("/")
    assert response.status_code == 200
    assert response.text == '"hello from Langguini!"'
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
    files = get_all_files()
    for file in files[-1:]:
        file_path = f"{data_dir}/{file}"
        form_data = {
            'audio_file': (
                'filename',
                open(file_path, 'rb'),
                'audio/mpeg'
            ),
        }
        response = client.post(
            "/fb/?word=hello",
            files=form_data
        )
        print(response.json())
        assert response.status_code == 200
        assert response.json() is not None
        assert response.json()["ipa"] is not None
        assert response.json()["phonemes"] is not None
        assert len(response.json()["ipa"]) > 0
        assert len(response.json()["phonemes"]) > 0
        assert response.json()["ipa"] == FeedbackPipeline(
        ).transcribe(file_path)
        # assert response.json()["phonemes"] == FeedbackPipeline().get_phonemes("hello")
        print(response.json())
