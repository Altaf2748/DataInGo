import { supabase } from "@/integrations/supabase/client";

interface FormSubmissionData {
  form_type: string;
  full_name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  requirements?: string;
  category?: string;
  country?: string;
  ip_address?: string;
  user_agent?: string;
}

export const submitFormToDatabase = async (data: FormSubmissionData) => {
  try {
    const { data: result, error } = await supabase
      .from('form_submissions')
      .insert([{
        form_type: data.form_type,
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        message: data.message,
        requirements: data.requirements,
        category: data.category,
        country: data.country,
        ip_address: data.ip_address,
        user_agent: data.user_agent
      }])
      .select()
      .single();

    if (error) {
      console.error('Database submission error:', error);
      throw error;
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error };
  }
};