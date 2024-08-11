import { error } from '@sveltejs/kit';

export async function load({params, parent, url}){
    let { supabase } = await parent();

    console.log(supabase);

    let lesson_id = url.searchParams.get('id');

    if (!lesson_id) {
        return error(400, {message: 'Lesson ID is required.'});
    }

    console.log(lesson_id);

    let lesson = await supabase.from('lessons').select('*').eq('id', lesson_id).single();

    if (!lesson) {
        return error(404, {message: 'Lesson not found.'});
    }

    return {
            lesson: lesson.data
    }
}