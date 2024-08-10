/**
 * This file is necessary to ensure protection of all routes in the `private`
 * directory. It makes the routes in this directory _dynamic_ routes, which
 * send a server request, and thus trigger `hooks.server.ts`.
 **/

export async function load({request, locals: { supabase }}) {
    console.log('load')
    return {
        from: 'layout'
    }
}