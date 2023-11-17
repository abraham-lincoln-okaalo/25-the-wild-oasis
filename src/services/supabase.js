import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://eqlfrhhrvpwacnwvagij.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbGZyaGhydnB3YWNud3ZhZ2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMzc5MjgsImV4cCI6MjAxNTgxMzkyOH0.JOD9H2Ckh93LAv0UMOSN7DymGh9SmvYurq32oFfNVnE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
