import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  ShoppingBag,
  Users,
  Upload,
  Settings,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, Logo } from "@/components/ui/ResponsiveImage";

interface SidebarProps {
  className?: string;
}

const navigation = [
   { id: "/", name: "Metrics", icon: LayoutGrid, hasChevron: false },
  // { id: "reports", name: "Reports", icon: ShoppingBag, hasChevron: false },
   { id: "users2", name: "Users", icon: Users, hasChevron: false },
  // { id: "importar", name: "Import", icon: Upload, hasChevron: false }, // aquí clave 'importar'
  // { id: "Configuracion", name: "Configuration", icon: Settings, hasChevron: false },
];


export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  return (
    <div className={cn("bg-[#111827]", className)}>
      {/* User Profile Section */}
      <div className="p-4 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <Avatar
            src="/public/empresas/JL_CAPANA/jl_capana.jpg"
            alt="empresas"
            size="md"
            initials="SD"
            className="hover:scale-105 transition-transform duration-300"
          />
          <div className="min-w-0 flex-1">
            <p className="text-white font-medium text-sm truncate">
              JL CAPANNA
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navigation.map((item) => {
          const path = `/${item.id}`;
          const isActive = location.pathname === path;

          return (
            <Link
              key={item.id}
              to={path}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-sidebar text-white shadow-sm"
                  : "text-gray-400 hover:bg-gray-700 hover:text-white active:bg-gray-600"
              )}
            >
              <div className="flex items-center">
                <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </div>
              {item.hasChevron && (
                <ChevronRight className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover:text-gray-200 transition-colors" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logo */}
      <div className="p-4 flex-shrink-0">

      </div>
    </div>
  );
}
