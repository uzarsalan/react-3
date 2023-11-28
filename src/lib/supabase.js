import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://yldkxphcqcdedhaitoxe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZGt4cGhjcWNkZWRoYWl0b3hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3OTQ5MDMsImV4cCI6MjAxNTM3MDkwM30.7_4wqIeZaO9GE4HRu4CPM13DAAqCFy_KXATjs3e__is"
);
