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
  { name: "Dashboard", icon: Home, current: true },
  { name: "My E-commerce", icon: ShoppingCart, current: false },
  { name: "Search Lab", icon: Search, current: false },
  { name: "Search Lab", icon: Search, current: false },
  { name: "Filter State", icon: Filter, current: false },
  { name: "Real Time State", icon: Activity, current: false },
  { name: "Boosting Rules", icon: Zap, current: false },
  { name: "Setting", icon: Settings, current: false },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("w-64 bg-sidebar h-screen flex flex-col", className)}>
      {/* User Profile Section */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img
              src="/api/placeholder/40/40"
              alt="Sophie Devine"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div>
            <p className="text-white font-medium text-sm">Sophie Devine</p>
            <p className="text-white/70 text-xs">Admin</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href="#"
            className={cn(
              "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
              item.current
                ? "bg-white/10 text-white"
                : "text-white/70 hover:bg-white/5 hover:text-white",
            )}
          >
            <item.icon className="w-4 h-4 mr-3" />
            {item.name}
          </a>
        ))}
      </nav>

      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-sidebar" />
          </div>
          <span className="text-white font-bold text-lg">Kalifind</span>
        </div>
      </div>
    </div>
  );
}
