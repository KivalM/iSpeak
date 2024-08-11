import { fail, type Actions } from "@sveltejs/kit";
import { contentGenerator} from "$lib/server/langchain";
import { ogg_to_wav } from "$lib/server/transcriber";

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        console.log(formData)

        // get the audio file
        const audio_file = formData.get('audio_file') as File

        // check that the audio file is entered
        if (!audio_file) {
            return fail(400, {missing: true})
        }

        // gett array buffer
        const arrayBuffer = await audio_file.arrayBuffer()

        console.log(arrayBuffer)

        // convert audio file to wav
        let wavBuffer = ogg_to_wav(arrayBuffer);

        return {
        }

    },
} satisfies Actions;