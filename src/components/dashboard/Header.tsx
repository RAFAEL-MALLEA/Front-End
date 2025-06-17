import { CalendarDays, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="bg-white border-b border-dashboard-border px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-dashboard-text-primary">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Date Range */}
          <div className="flex items-center space-x-2 text-sm text-dashboard-text-secondary">
            <CalendarDays className="w-4 h-4" />
            <span>11 may 2022 - 3 june 2022</span>
          </div>

          {/* Account Button */}
          <Button variant="outline" className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Account</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
