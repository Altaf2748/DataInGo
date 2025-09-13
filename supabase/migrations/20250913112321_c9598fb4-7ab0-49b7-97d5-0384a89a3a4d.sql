-- Create a table for form submissions
CREATE TABLE IF NOT EXISTS public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  form_type TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  requirements TEXT,
  category TEXT,
  country TEXT,
  ip_address INET,
  user_agent TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting form submissions (allow anyone to submit)
CREATE POLICY "Anyone can submit forms" 
ON public.form_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading form submissions (restrict to authenticated users if needed)
CREATE POLICY "Authenticated users can view submissions" 
ON public.form_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

-- Create indexes for performance
CREATE INDEX idx_form_submissions_type ON public.form_submissions(form_type);
CREATE INDEX idx_form_submissions_email ON public.form_submissions(email);
CREATE INDEX idx_form_submissions_submitted_at ON public.form_submissions(submitted_at DESC);