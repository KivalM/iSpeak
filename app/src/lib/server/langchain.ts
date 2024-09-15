// import { ANTHROPIC_API_KEY } from "$env/static/private";
// import type {  Tables, Database, Enums, TablesInsert } from "$lib/data/db/database.types";
// import { ChatAnthropic } from "@langchain/anthropic";
// import { HumanMessage, SystemMessage } from "@langchain/core/messages";
// import type { SupabaseClient } from "@supabase/supabase-js";
// import { z } from "zod";


// const model = new ChatAnthropic({
//     model: "claude-3-5-sonnet-20240620",
//     temperature: 0,
//     anthropicApiKey: ANTHROPIC_API_KEY
// });


// const ContentFormat = z.object({
//     name: z.string().describe("The name of the content."),
//     content: z.array(z.string()).describe("A list of words and phrases that can be used to teach a beginner how to speak the following in the English language."),
//     category: z.string().describe("The category of the content."),
//     description: z.string().describe("A description of the content."),
//     difficulty: z.number().describe("The difficulty level of the content from 1 to 5."),
// });

// class ContentGenerator {
//     model;

//     constructor() {
//         this.model = model.withStructuredOutput(ContentFormat);
//     }

//     async generateContent(prompt:string, supabase:SupabaseClient) {
//         const messages = [
//             new SystemMessage("Generate a set of words and phrases that can be used to teach a beginner how to speak the following in the English language."),
//             new HumanMessage(prompt),
//         ];

//         let response = await this.model.invoke(messages)

//         let lessons: TablesInsert<'lessons'> = {
//             language: 'en',
//             name: response.name,
//             description: response.description,
//             lesson_content: JSON.stringify(response.content),
//             difficulty_level: response.difficulty,
//         }

//         if (supabase) {
//             // save the response to the database
//             let response = await supabase.from('lessons').insert(lessons);
//             console.log(response)
//         }

//         return response
//     }
// }

// export const contentGenerator = new ContentGenerator();


// const FeedbackFormat = z.object({
//     errors: z.array(z.string()).describe("A short list of errors that the user made."),
//     feedback: z.string().describe("A feedback message for the user."),
//     rating: z.number().describe("The rating of the user's performance from 1 to 5."),
// });


// class FeedbackGenerator {
//     model;

//     constructor() {
//         this.model = model.withStructuredOutput(FeedbackFormat);
//     }

//     async generateContent(prompt:string,) {
//         const messages = [
//             new SystemMessage("You are given a word/phrase, its IPA representation and the users phonetic transcription. Provide feedback on the user's performance." +
//             "The user's phonetic transcription will have some spaces in it. You should ignore these spaces when comparing the user's speech to the actual IPA." +
//             "The user does not see the phonetic representation, so describe the errors in the user's speech in a way that is helpful for them to improve." +
//             "Do not provide feedback in the context of IPA symbols. Instead, provide feedback in plain English." +
//             "Keep the feedback brief and to the point."),
//             new HumanMessage(prompt),
//         ];

//         let response = await this.model.invoke(messages)

//         return response
//     }
// }

// export const feedbackGenerator = new FeedbackGenerator();