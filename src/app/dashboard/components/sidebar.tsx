import { CirclePlus, LayoutDashboard, LogOut, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signOut } from "../actions";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <CirclePlus className="h-4 w-4" />
              Mint
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Send className="h-4 w-4" />
              Send
            </Button>
            <form action={signOut}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-red-500 hover:text-red-500"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
