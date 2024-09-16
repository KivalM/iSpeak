
create table public.lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    language language NOT NULL,
    description text NOT NULL,
    lesson_content JSONB NOT NULL,
    difficulty_level integer,
    created_by UUID REFERENCES profiles(id),
    public BOOLEAN DEFAULT FALSE,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::TEXT, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::TEXT, now()) NOT NULL
);

ALTER TABLE public.lessons
  ENABLE ROW LEVEL SECURITY;

CREATE POLICY
    "Can only view own lesson data."
    ON public.lessons
    FOR SELECT
    USING ( auth.uid() = created_by or public );

CREATE POLICY
    "Can only update own lesson data."
    ON public.lessons
    FOR UPDATE
    USING ( auth.uid() = created_by );

CREATE POLICY
    "Can only delete own lesson data."
    ON public.lessons
    FOR DELETE
    USING ( auth.uid() = created_by );

CREATE POLICY
    "Can only insert own lesson data."
    ON public.lessons
    FOR INSERT
    WITH CHECK ( auth.uid() = created_by );
