import { error } from '@sveltejs/kit';
export let ssr=false;
export async function load({params, parent, url}){
    let { lesson } = await parent();

    // parse into array
    console.log(lesson?.lesson_content)
    let content: string[] = JSON.parse(lesson?.lesson_content||"[]");

    return {
            content: content,
    }
}