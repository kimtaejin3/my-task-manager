import { createClient } from "@supabase/supabase-js";

import type { Database } from "../types/supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type Tables = Database["public"]["Tables"];
export type BoardRow = Tables["board"]["Row"];
export type TaskRow = Tables["task"]["Row"];
