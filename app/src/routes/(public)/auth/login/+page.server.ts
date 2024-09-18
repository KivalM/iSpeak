import { redirect } from '@sveltejs/kit'
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types'

export const actions: Actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    let originalformData = {  
      "email":{
        "value": email,
        "error": null,
      },
      "password":{
        "value": password,
        "error": null,
      },
    }

    const { error:errorr } = await supabase.auth.signInWithPassword({ email, password })
    if (errorr) {
      console.log(errorr)
      return fail(400, { ...originalformData, error: errorr.message })
    } else {
      redirect(303, '/dashboard')
    }
  },
} satisfies Actions;