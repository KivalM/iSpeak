import { fail, type Actions } from "@sveltejs/kit";
import { contentGenerator} from "$lib/server/langchain";

export const actions: Actions = {
    default: async ({ request, locals:{supabase} }) => {
        const formData = await request.formData()
        const prompt = formData.get('prompt') as string

        // check that the prompt is entered
        if (!prompt && prompt.length < 1) {
            return fail(400, {prompt, missing: true})
        }

        const response = await contentGenerator.generateContent(prompt, supabase)
        console.log(response)
        return {
            messages: response
        }

    },
} satisfies Actions;