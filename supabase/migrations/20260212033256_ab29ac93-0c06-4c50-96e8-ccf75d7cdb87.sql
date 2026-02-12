-- Add explicit deny SELECT policy to prevent any client-side reads of form submissions
CREATE POLICY "No one can read submissions via client"
ON public.form_submissions
FOR SELECT
USING (false);
