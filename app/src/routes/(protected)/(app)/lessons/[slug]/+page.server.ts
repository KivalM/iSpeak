import { PUBLIC_TRANSCRIPTION_API_URL } from "$env/static/public";
import { fail, type Actions } from "@sveltejs/kit";

export const actions = {
	default: async ({request}) => {
		// TODO log the user in
        console.log(request)
        const formData = await request.formData()
        console.log(formData)

        let audio = formData.get('audio') as Blob
        let word = formData.get('word') as string

        const data = new FormData()
        data.append('audio', audio, 'audio.ogg')
        data.append('word', word)
        console.log(data)

        // forward the request to the fastapi server
        const response = await fetch(PUBLIC_TRANSCRIPTION_API_URL+"/fb/", {
            method: 'POST',
            body: data
        })
        const data2= await response.json()
        return data2
	},
} satisfies Actions;