export async function load({params, parent, url}){
    let demoProfile = {
        name: 'Guest',
        age: 18,
    }

    const { supabase } = await parent();
    
    const lessons = await supabase.from('lessons').select('*')
        
    return {
        profile:demoProfile,
        lessons: lessons.data,
        last_lesson: lessons.data[lessons.data.length - 1]
    }
}

