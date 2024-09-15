import { redirect } from '@sveltejs/kit'
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types'

export const actions: Actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    // check that the name is entered
    const name = formData.get('name') as string
    if (!name && name.length < 1) {
      console.log('name', name)
      return fail(400, {name, missing: true})
    }
    
    // validate email
    if (!email || !email.includes('@')) {
      console.log('email', email)
      return fail(400, {email, missing: !email, invalid: !email?.includes('@')})
    }

    // check that email doesn't already exist
    const { data, error:err } = await supabase
    .from('profiles')
    .select('id')
    .eq('email', email)


    if (data && data.length > 0) {
      console.log('email', email)
      return fail(400, {email, exists: true})
    }

    // validate password
    if (!password || password.length < 8) {
      console.log('password length', password?.length)
      return fail(400, {password, missing: !password, invalid: password?.length < 8})
    }

    // check that username is entered
    const username = formData.get('username') as string
    if (!username && username.length < 1) {
      console.log('username', username)
      return fail(400, {username, missing: true})
    }
    


    // check that password and password validation match
    const password2 = formData.get('password2') as string
    if (password !== password2) {
      console.log('password match', password, password2)
      return fail(400, {password2, match: false})
    }
    const { error } = await supabase.auth.signUp({ email, password, 
      options: { data: { name, username } }
     })


    if (error) {
      console.log('error', error)
      return fail(400, {
        "code": error.code,
        "message": error.message,
      })
    } else {
      redirect(303, '/dashboard')
    }
  },

} satisfies Actions;