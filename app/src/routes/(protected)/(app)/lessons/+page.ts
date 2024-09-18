export async function load({parent}) {
    const { supabase,session } = await parent();
    console.log(session)
    const lessons = await supabase.from('lessons').select('*').eq('created_by', session?.user.id)

    return {
        lessons: lessons.data
    }
}