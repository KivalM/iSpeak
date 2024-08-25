import { error } from '@sveltejs/kit';

export async function load({locals:{supabase}}) {
    let lesson = await supabase.from('lessons').select('*');

    if (!lesson.data) {
        return error(404, {message: 'Lesson not found.'});
    }

    return {
            lesson: lesson.data[0]
    }
}