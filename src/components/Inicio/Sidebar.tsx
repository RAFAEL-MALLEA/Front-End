import {
  LayoutGrid,
  ShoppingBag,
  FileText,
  Filter,
  BarChart3,
  FileCheck,
  Settings,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, Logo } from "@/components/ui/ResponsiveImage";

interface SidebarProps {
  className?: string;
}

const navigation = [
  {
    id: "Companis",
    name: "Compañias",
    icon: LayoutGrid,
    current: false,
    hasChevron: false,
  },
  {
    id: "Usuarios",
    name: "Users",
    icon: ShoppingBag,
    current: false,
    hasChevron: false,
  },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        "bg-[#111827]",
        className,
      )}
    >
      {/* User Profile Section */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex-shrink-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Avatar
            src="/public/empresas/inventaria/hlogo.png"
            alt="Sophie Devine Profile Picture"
            size="md"
            initials="SD"
            className="hover:scale-105 transition-transform duration-300"
          />

        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 sm:px-4 py-4 sm:py-6 space-y-1 sm:space-y-2 overflow-y-auto">
        {navigation.map((item) => (
          <a
            key={item.id}
            href="#"
            className={cn(
              "flex items-center justify-between px-2 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 touch-manipulation group",
              item.current
                ? "bg-sidebar text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 active:bg-gray-100",
            )}
          >
            <div className="flex items-center">
              <item.icon className="w-4 h-4 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="truncate">{item.name}</span>
            </div>
            {item.hasChevron && (
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-gray-400 group-hover:text-gray-600 transition-colors" />
            )}
          </a>
        ))}
      </nav>

    </div>
  );
}
