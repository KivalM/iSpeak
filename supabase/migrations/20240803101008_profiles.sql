-- create an enum to store languages
CREATE TYPE language AS ENUM ('en', 'es', 'fr', 'de', 'it', 'pt', 'ja');

-- create a table to store user profiles
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  bio TEXT,
  language language DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::TEXT, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::TEXT, now()) NOT NULL
);
ALTER TABLE public.profiles
  ENABLE ROW LEVEL SECURITY;

CREATE POLICY
  "Can only view own profile data."
  ON public.profiles
  FOR SELECT
  USING ( auth.uid() = id );

CREATE POLICY
  "Can only update own profile data."
  ON public.profiles
  FOR UPDATE
  USING ( auth.uid() = id );

CREATE FUNCTION
  public.create_profile_for_new_user()
  RETURNS TRIGGER AS
  $$
  BEGIN
    INSERT INTO public.profiles (id, name, email)
    VALUES (
      NEW.id,
      NEW.raw_user_meta_data ->> 'name',
      New.email
    );
    RETURN NEW;
  END;
  $$ LANGUAGE plpgsql SECURITY DEFINER;



CREATE TRIGGER
  create_profile_on_signup
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE PROCEDURE
    public.create_profile_for_new_user();
