
create table public.results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    word TEXT NOT NULL,
    category TEXT NOT NULL,
    user_id UUID NOT NULL,
    score FLOAT NOT NULL,
    feedback JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::TEXT, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::TEXT, now()) NOT NULL
);

ALTER TABLE public.results
  ENABLE ROW LEVEL SECURITY;

CREATE POLICY
    "Can only view own results data."
    ON public.results
    FOR SELECT
    USING ( auth.uid() = user_id);

CREATE POLICY
    "Can only update own results data."
    ON public.results
    FOR UPDATE
    USING ( auth.uid() = user_id );

CREATE POLICY
    "Can only delete own results data."
    ON public.results
    FOR DELETE
    USING ( auth.uid() = user_id );

CREATE POLICY
    "Can only insert own results data."
    ON public.results
    FOR INSERT
    WITH CHECK ( auth.uid() = user_id );
