
export async function load({parent, params, url}) {
    const { lesson } = await parent();
    console.log(lesson)
    // check for idx in query params
    let idx;
    if (url.searchParams.has('idx')) {
        idx = parseInt(url.searchParams.get('idx')!);
    } else {
        idx = 0;
    }

    return {
        idx: idx,
        name: lesson.name,
        description: lesson.description,
        word: lesson.lesson_content[idx],
        next: idx === lesson.lesson_content.length - 1 ? null : idx + 1,
        prev: idx === 0 ? null : idx - 1,
    }
}