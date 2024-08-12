import { fail, type Actions } from "@sveltejs/kit";
import { feedbackGenerator } from "$lib/server/langchain";


export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        console.log(formData)

        const word = formData.get('word')
        const ipa = formData.get('ipa')
        const phonemes = formData.get('phonemes')

        let prompt = JSON.stringify({
            actual: word,
            actual_ipa: phonemes,
            users_ipa: ipa,
        })


        let feedback = await feedbackGenerator.generateContent(prompt)
        console.log('f',feedback)

        // return as json
        const json = {
            errors: feedback.errors,
            feedback: feedback.feedback,
            rating: feedback.rating
        }

        return json
    },
} satisfies Actions;