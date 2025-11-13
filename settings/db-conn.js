/* Initialisation of connection with Supabase project with its dbs */

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gizyyugpvcqvlbjoaotd.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey) // Supabase client 'connect-point'