export async function load({ data, parent }) {

    let user = {
        name: 'John Doe',
        age: 30
    }



    let courses = [
        {
            active: true,
            language: 'English',
            level: 'Beginner',
            progress: 30
        },
        {
            active: false,
            language: 'Spanish',
            level: 'Beginner',
            progress: 30
        },
        {
            active: false,
            language: 'French',
            level: 'Beginner',
            progress: 30
        }
    ]

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
                    completed: true
                },
                {
                    id: "en-alphabet-beginner-xasd-2",
                    title: 'How are you?',
                    description: 'Learning to ask how someone is doing in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: false
                },
                {
                    id: "en-alphabet-beginner-xasd-3",
                    title: 'I am fine',
                    description: 'Learning to say I am fine in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: false
                },
                {
                    id: "en-alphabet-beginner-xasd-4",
                    title: 'Goodbye',
                    description: 'Learning to say goodbye in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: false
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
                    completed: false
                },
                {
                    id: "en-numbers-beginner-xasd-2",
                    title: '11-20',
                    description: 'Learning numbers 11-20 in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: false
                },
                {
                    id: "en-numbers-beginner-xasd-3",
                    title: '21-30',
                    description: 'Learning numbers 21-30 in English',
                    type: 'conversation',
                    duration: '5:00',
                    completed: false
                }

            ]
        }
    ]








    return {

        user,
        courses,
        curriculum
    }
}