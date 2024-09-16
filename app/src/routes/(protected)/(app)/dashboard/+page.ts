


import { error } from '@sveltejs/kit';

export async function load({parent}) {
    const { supabase } = await parent();
    // count words learned
    const wordCount = await supabase.from('results').select('word');
    let uniqueWords = new Set();
    if (wordCount.data)
    {
        for (let i = 0; i < wordCount.data.length; i++)
        {
            uniqueWords.add(wordCount.data[i].word);
        }
    }

    // count days learned
    const dayCount = await supabase.from('results').select('created_at');
    // count unique days learned
    let uniqueDayCount = 0;
    let days = [];
    if (dayCount.data)
    {
        for (let i = 0; i < dayCount.data.length; i++)
        {
            let date = new Date(dayCount.data[i].created_at);
            let day = date.getDate();
            if (!days.includes(day))
            {
                days.push(day);
                uniqueDayCount++;
            }
        }
    }

    // average score
    const avgScore = await supabase.from('results').select('score.avg()');

    // best word
    let bestWordsResponse = await supabase.from('results').select('word, score.max()');
    let bestWordsData = bestWordsResponse.data;
    let bestWord = {word: '', max: 0};

    if (bestWordsData)
    {
        for (let i = 0; i < bestWordsData.length; i++)
        {
            if (bestWordsData[i].max > bestWord.max)
            {
                bestWord.word = bestWordsData[i].word;
                bestWord.max = bestWordsData[i].max;
            }
        }
    }
    console.log(bestWord);

    // most recently created lesson
    const latestLesson = await supabase.from('lessons').select('*').order('created_at', {ascending: false}).limit(1);
    console.log(latestLesson.data[0].name);

    return {
        // results: results.data
        uniqueWords: uniqueWords.size,
        uniqueDayCount: uniqueDayCount,
        avgScore: avgScore.data[0].avg,
        bestWord: bestWord,
        latestLesson: latestLesson.data[0],

    }
}