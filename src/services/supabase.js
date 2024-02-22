import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rubnaqbhuzdtdpkubght.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1Ym5hcWJodXpkdGRwa3ViZ2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NzcyNzMsImV4cCI6MjAyNDE1MzI3M30.a-GWAFOvYlpZVvwDYXnTk2OdFC7UoXYShGJgnsTEgg8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
