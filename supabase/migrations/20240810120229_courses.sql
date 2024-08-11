
create table public.lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    language language NOT NULL,
    description text NOT NULL,
    lesson_content JSONB NOT NULL,
    difficulty_level integer,
    created_by UUID REFERENCES profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::TEXT, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::TEXT, now()) NOT NULL
);

CREATE TABLE public.user_lessons (
    user_id UUID REFERENCES profiles(id),
    lesson_id UUID REFERENCES lessons(id),
    lesson_feedback text,
    PRIMARY KEY (user_id, lesson_id)
);
