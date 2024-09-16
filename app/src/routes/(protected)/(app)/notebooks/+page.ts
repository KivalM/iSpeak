import { error } from '@sveltejs/kit';

export async function load({parent}) {
    const { supabase } = await parent();
    // select and group by word and average the score
    const results = await supabase.from('results').select('word, score.avg(), score.max()');

    if (!results.data) {
        return error(404, {message:results.error.message});
    }

    console.log(results.data)
    return {
        results: results.data
    }
}