import { redirect } from '@sveltejs/kit'
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types'

export const actions: Actions = {
  default: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = (formData.get('email') as string).toLowerCase()
    const name = formData.get('name') as string
    const password = formData.get('password') as string
    const username = formData.get('username') as string

    let originalformData = {
      "supabase": null,
      "email":{
        "value": email,
        "error": null,
      },
      "username":{
        "value": username,
        "error": null,
      },
      "name":{
        "value": name,
        "error": null,
      },
      "password":{
        "value": password,
        "error": null,
      },

    }

    
    // validate email
    if (!email) {
      originalformData.email.error = 'Email is required'
    }
    if (!email.includes('@')) {
      originalformData.email.error = 'Invalid email'
    }
        // check that the name is entered
    if (!name && name.length < 1) {
      originalformData.name.error = 'Name is required'
    }

    // validate password
    if (!password || password.length < 8) {
      originalformData.password.error = 'Password must be at least 8 characters'
    }

    // check that username is entered
    if (!username && username.length < 1) {
      originalformData.username.error = 'Username is required'
    }

    // check that password and password validation match
    const password2 = formData.get('password2') as string
    if (password !== password2) {
      originalformData.password.error = 'Passwords do not match'
    }

    // if any errors, return the form data with errors
    if (originalformData.email.error || originalformData.name.error || originalformData.password.error || originalformData.username.error) {
      return fail(400, originalformData)
    }



    const { error } = await supabase.auth.signUp({ 
        email, 
        password,
        options: 
        { 
          data: { 
            name, 
            username, 
            "display_name": username
          } 
        }
     })


    if (error) {
      console.log('error', error)
      console.log('error', error.code)
      return fail(400, { ...originalformData, error: error.message })
    } else {
      redirect(303, '/dashboard')
    }
  },

} satisfies Actions;