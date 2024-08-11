import { pipeline, type PipelineType } from '@xenova/transformers';
const transcriber = await pipeline('automatic-speech-recognition', 'facebook/wav2vec2-lv-60-espeak-cv-ft');






class Transcriber {
    model;
    constructor()
    {
        this.model = transcriber;
    }

    async transcribe(audio_file) {
        return await this.model(audio_file);
    }
}