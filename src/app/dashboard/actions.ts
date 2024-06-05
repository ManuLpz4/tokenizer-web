"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function signOut() {
  const supabase = createClient();

  supabase.auth.signOut();
  redirect("/");
}
