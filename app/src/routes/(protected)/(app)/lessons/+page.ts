export async function load({parent}) {
    const { supabase } = await parent();
    const lessons = await supabase.from('lessons').select('*')

    return {
        lessons: lessons.data
    }
}