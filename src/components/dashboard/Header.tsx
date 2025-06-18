import { CalendarDays, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="bg-white">
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-end space-y-2 xs:space-y-0 xs:space-x-3 sm:space-x-4">
          {/* Date Range */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-dashboard-text-secondary">
            <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">11 may 2022 - 3 june 2022</span>
          </div>

          {/* Account Button */}
          <Button
            variant="outline"
            className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 h-auto min-w-fit"
          >
            <User className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden xs:inline">Account</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
