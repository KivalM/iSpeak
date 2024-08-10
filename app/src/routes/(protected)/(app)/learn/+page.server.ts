import { fail, type Actions } from "@sveltejs/kit";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

export const actions: Actions = {
    default: async ({ request, locals: { supabase, model } }) => {
        const formData = await request.formData()
        const prompt = formData.get('prompt') as string

        // check that the prompt is entered
        if (!prompt && prompt.length < 1) {
            return fail(400, {prompt, missing: true})
        }

        const messages = [
            new SystemMessage("Translate the following from English into Italian"),
            new HumanMessage("hi!"),
          ];
          
        return {
            messages:  model.invoke(messages)
        }

    },
} satisfies Actions;