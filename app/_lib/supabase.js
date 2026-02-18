import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  // process.env.SUPABASE_URL,
  "https://kwheetxienedgekhjquf.supabase.co",
  // process.env.SUPABASE_KEY,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3aGVldHhpZW5lZGdla2hqcXVmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Njk4MDQzNiwiZXhwIjoyMDcyNTU2NDM2fQ.1vaiUFg4OsifEcFgVudYWDqgvAYlZWeH567K7nZOpBw",
);
