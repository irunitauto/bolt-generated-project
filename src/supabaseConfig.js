import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log("Supabase URL from env:", supabaseUrl);
console.log("Supabase Anon Key from env:", supabaseKey);

if (!supabaseUrl) {
  console.error("VITE_SUPABASE_URL is not defined. Please check your .env.local file and Vite configuration.");
}

if (!supabaseKey) {
  console.error("VITE_SUPABASE_ANON_KEY is not defined. Please check your .env.local file and Vite configuration.");
}

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL or Anon Key are missing, client initialization may fail.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
