import {
  BarChart3,
  ShoppingCart,
  Search,
  Filter,
  Activity,
  Zap,
  Settings,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, Logo } from "@/components/ui/ResponsiveImage";

interface SidebarProps {
  className?: string;
}

const navigation = [
  { id: "dashboard", name: "Dashboard", icon: Home, current: true },
  {
    id: "ecommerce",
    name: "My E-commerce",
    icon: ShoppingCart,
    current: false,
  },
  { id: "search-lab", name: "Search Lab", icon: Search, current: false },
  { id: "filter-state", name: "Filter State", icon: Filter, current: false },
  { id: "real-time", name: "Real Time State", icon: Activity, current: false },
  { id: "boosting", name: "Boosting Rules", icon: Zap, current: false },
  { id: "setting", name: "Setting", icon: Settings, current: false },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 h-full flex flex-col shadow-lg md:shadow-none",
        className,
      )}
    >
      {/* User Profile Section */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Avatar
            src="https://cdn.builder.io/api/v1/assets/63813166d9a640a3ba53e42c83e92b26/07fd4b021b913b8a47a365bfef36598790a687fe-7aa66e"
            alt="Sophie Devine Profile Picture"
            size="md"
            initials="SD"
            className="hover:scale-105 transition-transform duration-300"
          />
          <div className="min-w-0 flex-1">
            <p className="text-gray-900 font-medium text-xs sm:text-sm md:text-sm truncate">
              Sophie Devine
            </p>
            <p className="text-gray-500 text-xs truncate">Admin</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 sm:px-4 py-4 sm:py-6 space-y-1 sm:space-y-2 overflow-y-auto">
        {navigation.map((item) => (
          <a
            key={item.id}
            href="#"
            className={cn(
              "flex items-center px-2 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-colors touch-manipulation",
              item.current
                ? "bg-sidebar text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200",
            )}
          >
            <item.icon className="w-4 h-4 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0" />
            <span className="truncate">{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Logo */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex-shrink-0 border-t border-gray-100">
        <div className="flex items-center justify-center">
          <Logo
            src="https://cdn.builder.io/api/v1/assets/63813166d9a640a3ba53e42c83e92b26/696fce25d20f5d30fc42df786f80c40ee759aaf7-efc827"
            alt="Kalifind - Vendor Analytics Platform"
            fallbackText="Kalifind"
            className="hover:opacity-90 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
}
