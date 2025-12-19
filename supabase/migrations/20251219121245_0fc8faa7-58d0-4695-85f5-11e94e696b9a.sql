-- Fix: Remove overly permissive SELECT policy that exposes PII to all authenticated users
-- Data should only be accessed via service role in edge functions

DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.form_submissions;

-- Add explicit deny policies for UPDATE and DELETE
CREATE POLICY "No one can update submissions via client"
ON public.form_submissions
FOR UPDATE
USING (false);

CREATE POLICY "No one can delete submissions via client"
ON public.form_submissions
FOR DELETE
USING (false);