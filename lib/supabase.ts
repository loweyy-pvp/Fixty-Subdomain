import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.https://hztnrujpybadvbuvovzv.supabase.co;
const supabaseAnonKey = process.env.sb_publishable_omJyUWjAa2ujOGItr9JjZg_gAPRmXgK;

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
