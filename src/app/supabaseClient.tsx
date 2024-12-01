// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Folosește valorile tale de la Supabase
const supabaseUrl = 'https://edysjbvmnmeuxmpnrfnl.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkeXNqYnZtbm1ldXhtcG5yZm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwNTkxOTQsImV4cCI6MjA0ODYzNTE5NH0.KYK8tgnoclOHs3OvmoNuNa6P8mlTGmlU-TSdnVwvfpM'; 
export const supabase = createClient(supabaseUrl, supabaseKey);
