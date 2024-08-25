import { error } from '@sveltejs/kit';

export async function load({parent, params, url}) {
    const { supabase } = await parent();

    let lesson_id = params.slug;
    let lesson_response = await supabase.from('lessons').select('*').eq('id', lesson_id).single()

    if (!lesson_response.data) {
        return error(404, {message: 'Lesson not found.'});
    }

    let lesson = lesson_response.data;
    let content: string[] = JSON.parse(lesson?.lesson_content?.toString()!||"[]");
    lesson.lesson_content = content;
    return {
        lesson: lesson,
        idx: 0,
        max: content.length
    }
}