import { redirect } from '@sveltejs/kit'
import { fail, error } from '@sveltejs/kit';
import type { Actions } from './$types'

export const actions: Actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error:errorr } = await supabase.auth.signInWithPassword({ email, password })
    if (errorr) {
      error(errorr.code, errorr.message)
    } else {
      redirect(303, '/dashboard')
    }
  },
} satisfies Actions;