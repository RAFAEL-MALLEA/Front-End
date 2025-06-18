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
        "w-64 bg-white border-r border-gray-200 h-screen flex flex-col",
        className,
      )}
    >
      {/* User Profile Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            SD
          </div>
          <div>
            <p className="text-gray-900 font-medium text-sm">Sophie Devine</p>
            <p className="text-gray-500 text-xs">Admin</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => (
          <a
            key={item.id}
            href="#"
            className={cn(
              "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
              item.current
                ? "bg-sidebar text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
            )}
          >
            <item.icon className="w-4 h-4 mr-3" />
            {item.name}
          </a>
        ))}
      </nav>

      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center justify-center">
          <img
            src="https://cdn.builder.io/api/v1/assets/63813166d9a640a3ba53e42c83e92b26/696fce25d20f5d30fc42df786f80c40ee759aaf7-efc827?format=webp&width=800"
            alt="Kalifind Logo"
            className="h-8 w-auto max-w-full object-contain transition-opacity hover:opacity-90"
          />
        </div>
      </div>
    </div>
  );
}
