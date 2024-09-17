import { error, fail, type Actions } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import type {  Tables, Database, Enums, TablesInsert } from "$lib/data/db/database.types";
// import { contentGenerator} from "$lib/server/langchain";

export const actions: Actions = {
    generate: async ({ request, locals:{supabase, session} }) => {
        const formData = await request.formData()
        const prompt = formData.get('prompt') as string

        let data = new FormData()
        data.append('prompt', prompt)
        data.append('target_language', prompt)
        data.append('difficulty', prompt)

        let response = await fetch(env.PRIVATE_TRANSCRIPTION_API_URL+"/generate/", {
            method: 'POST',
            body: data
        })

        if (!response.ok) {
            return fail(response.status)
        }

        let data2 = await response.json()


        let lesson : TablesInsert<'lessons'> = {
            language: 'en',
            name: data2.name,
            description: data2.description,
            lesson_content: JSON.stringify(data2.content),
            difficulty_level: data2.difficulty,
            created_by: session?.user.id,
        }

        if (supabase) {
            let response = await supabase.from('lessons').insert(lesson);
            if (response.error) {
                fail(response.error.message)
            }
        }

        return data2
    },

    delete: async ({ request, locals:{supabase} }) => {
        // get form
        const form = await request.formData()
        const id = form.get('lesson_id') as string
        let response = await supabase.from('lessons').delete().eq('id', id);
        return response
    },

    finish: async ({ request, locals:{supabase} }) => {
        // get form
        const form = await request.formData()
        const id = form.get('lesson_id') as string
        let response = await supabase.from('lessons').update({completed: true}).eq('id', id);
        return response
    },
} satisfies Actions;