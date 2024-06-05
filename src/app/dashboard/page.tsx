import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Sidebar } from "./components/sidebar";

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="grid h-svh lg:grid-cols-5">
      <Sidebar className="hidden lg:block" />
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <p>Dashboard</p>
      </div>
    </div>
  );
}
