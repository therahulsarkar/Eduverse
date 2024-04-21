import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://psmhtbuppjfroxuegtee.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzbWh0YnVwcGpmcm94dWVndGVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NDU1OTAsImV4cCI6MjAyNjUyMTU5MH0.wuyyea80XIfobvhkA-_PxdCllhKSxrGbf6fpePlJwDs'

export const supabase = createClient(supabaseUrl, supabaseKey)