import { env } from "$env/dynamic/private";
import type { TablesInsert } from "$lib/data/db/database.types";
import { fail, type Actions } from "@sveltejs/kit";

export const actions = {
	default: async ({request, locals:{session,supabase}}) => {
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
        const response = await fetch(env.PRIVATE_TRANSCRIPTION_API_URL+"/fb/", {
            method: 'POST',
            body: data
        })
        const data2= await response.json()
        console.log(data2)

        let results : TablesInsert<'results'> = {
            word: word,
            category: 'Default',
            score: data2.score,
            feedback: data2,
            user_id: session?.user.id!,
        }

        if (supabase) {
            let response = await supabase.from('results').insert(results);
            console.log(response)
   
        }

        // save the data to a supabase bucket
        //  remove spaces and save as ogg
        // let saveWord = word.replace(/\s/g, '_')
        // let audioresponse = await supabase.storage.from('audio').upload('audio/'+saveWord+'.ogg', audio)

        return data2
	},
} satisfies Actions;