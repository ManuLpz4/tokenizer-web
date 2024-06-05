"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function signIn(previousState: unknown, formData: FormData) {
  console.log({ email: formData.get("email") as string });
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    console.error({ error });
    redirect("/error");
  }

  console.log({ data });
  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signUp(previousState: unknown, formData: FormData) {
  const supabase = createClient();
  const credentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  console.log({ credentials });
  const { data, error } = await supabase.auth.signUp(credentials);

  if (error) {
    console.error({ error });
    redirect("/error");
  }

  console.log({ data });
  revalidatePath("/", "layout");
  redirect("/");
}
