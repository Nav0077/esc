import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://dkilinxmpzjkedwevhkn.supabase.co'
const supabaseKey = 'sb_publishable_YBGEok1Q1cUJJ4kOZP-ZEA_-HM06Zq-'

export const supabase = createClient(supabaseUrl, supabaseKey)
