import 'react-native-url-polyfill'
import {createClient} from '@supabase/supabase-js'

const SUPABASE_URL = 'https://qnrvsxtpkuuumltfahsf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFucnZzeHRwa3V1dW1sdGZhaHNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODI4MzgsImV4cCI6MjA3OTc1ODgzOH0.NqDOPDa4FXjXjj3cuzebXGtSXKcYxk430PKGsG204Vo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);