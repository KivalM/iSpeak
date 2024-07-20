export function load({ params }) {



    let curriculum = [
        {
            id: "en-alphabet-beginner-xasd",
            title: 'Greetings',
            description: 'Learning various ways to greet people',

            steps: [
                {
                    id: "en-alphabet-beginner-xasd-1",
                    title: 'Hello',
                    description: 'Learning to say hello in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: true,
                    words: [
                        "Hello",
                        "Hi",
                        "Hey",
                    ]
                },
                {
                    id: "en-alphabet-beginner-xasd-2",
                    title: 'How are you?',
                    description: 'Learning to ask how someone is doing in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: false,
                    words: [
                        "How are you?",
                        "How are you doing?",

                    ]
                },
                {
                    id: "en-alphabet-beginner-xasd-3",
                    title: 'I am fine',
                    description: 'Learning to say I am fine in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: false,
                    words: [
                        "I am fine",
                        "I am good",
                        "I am great",
                        "I am okay",
                    ]
                },
                {
                    id: "en-alphabet-beginner-xasd-4",
                    title: 'Goodbye',
                    description: 'Learning to say goodbye in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: false,
                    words: [
                        "goodbye",
                        "bye",
                        "see you later",
                        "see you soon",
                        "see you tomorrow",
                        "see you next time",
                        "take care",
                        "have a good day",
                        "have a good night",
                        "have a good weekend",
                        "have a good trip",
                        "have a good vacation",
                        "have a good holiday",
                        "have a good evening",
                        "have a good morning",
                        "have a good afternoon",
                        "have a good night",
                    ]
                }

            ]


        },
        {
            id: "en-numbers-beginner-xasd",
            title: 'Numbers',
            description: 'Learning numbers in English',

            steps: [
                {
                    id: "en-numbers-beginner-xasd-1",
                    title: '1-10',
                    description: 'Learning numbers 1-10 in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: false,
                    words: [
                        "one",
                        "two",
                        "three",
                        "four",
                        "five",
                        "six",
                        "seven",
                        "eight",
                        "nine",
                        "ten"
                    ]
                },
                {
                    id: "en-numbers-beginner-xasd-2",
                    title: '11-20',
                    description: 'Learning numbers 11-20 in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: false,
                    words: [
                        "eleven",
                        "twelve",
                        "thirteen",
                        "fourteen",
                        "fifteen",
                        "sixteen",
                        "seventeen",
                        "eighteen",
                        "nineteen",
                        "twenty"
                    ]
                },
                {
                    id: "en-numbers-beginner-xasd-3",
                    title: '21-30',
                    description: 'Learning numbers 21-30 in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: false,
                    words: [
                        "twenty-one",
                        "twenty-two",
                        "twenty-three",
                        "twenty-four",
                        "twenty-five",
                        "twenty-six",
                        "twenty-seven",
                        "twenty-eight",
                        "twenty-nine",
                        "thirty"
                    ]
                }

            ]
        }
    ]




    let lesson = curriculum.find(lesson => params.slug.startsWith(lesson.id))
    let step = lesson.steps.find(step => params.slug === step.id)


    return step;

}