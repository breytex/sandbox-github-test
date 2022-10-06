import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pgeiaqxhyetkuehfjako.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnZWlhcXhoeWV0a3VlaGZqYWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ3OTkwNTMsImV4cCI6MTk4MDM3NTA1M30.iDhiHaQ34xQr_I4eCvPPkx6xa0j3Bs0K6T5BRlH-odI";
export const supabase = createClient(supabaseUrl, String(supabaseKey));
