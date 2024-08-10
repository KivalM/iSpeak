

export async function load({data, depends, fetch , parent}) {
    console.log('load')
    const { supabase } = await parent();
    
    const lessons = await supabase.from('lessons').select('*')
        

    return {
        lessons: lessons.data
    }
}