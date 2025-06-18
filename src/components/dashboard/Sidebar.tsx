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
        "bg-white border-r border-gray-200 h-full flex flex-col shadow-lg md:shadow-none",
        className,
      )}
    >
      {/* User Profile Section */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden ring-2 ring-gray-100 flex-shrink-0 bg-gray-100">
            <img
              src="https://cdn.builder.io/api/v1/assets/63813166d9a640a3ba53e42c83e92b26/07fd4b021b913b8a47a365bfef36598790a687fe-7aa66e?format=webp&width=200"
              srcSet="
                https://cdn.builder.io/api/v1/assets/63813166d9a640a3ba53e42c83e92b26/07fd4b021b913b8a47a365bfef36598790a687fe-7aa66e?format=webp&width=100 1x,
                https://cdn.builder.io/api/v1/assets/63813166d9a640a3ba53e42c83e92b26/07fd4b021b913b8a47a365bfef36598790a687fe-7aa66e?format=webp&width=200 2x,
                https://cdn.builder.io/api/v1/assets/63813166d9a640a3ba53e62c83e92b26/07fd4b021b913b8a47a365bfef36598790a687fe-7aa66e?format=webp&width=400 3x
              "
              alt="Sophie Devine Profile Picture"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-300 hover:scale-105"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML =
                    '<div class="w-full h-full bg-orange-400 text-white font-semibold text-xs sm:text-sm flex items-center justify-center">SD</div>';
                }
              }}
            />
          </div>
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
          <div className="relative h-6 sm:h-7 md:h-8 w-auto max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/assets/63813166d9a640a3ba53e42c83e92b26/696fce25d20f5d30fc42df786f80c40ee759aaf7-efc827?format=webp&width=400"
              srcSet="
                https://cdn.builder.io/api/v1/assets/63813166d9a640a3ba53e42c83e92b26/696fce25d20f5d30fc42df786f80c40ee759aaf7-efc827?format=webp&width=200 1x,
                https://cdn.builder.io/api/v1/assets/63813166d9a640a3ba53e42c83e92b26/696fce25d20f5d30fc42df786f80c40ee759aaf7-efc827?format=webp&width=400 2x,
                https://cdn.builder.io/api/v1/assets/63813166d9a640a3ba53e42c83e92b26/696fce25d20f5d30fc42df786f80c40ee759aaf7-efc827?format=webp&width=800 3x
              "
              alt="Kalifind - Vendor Analytics Platform"
              className="h-full w-auto object-contain transition-all duration-300 hover:opacity-90 hover:scale-105"
              loading="lazy"
              decoding="async"
              style={{ maxHeight: "100%", height: "auto" }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex items-center justify-center space-x-2 text-gray-900">
                      <div class="w-6 h-6 bg-sidebar rounded-sm flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                        </svg>
                      </div>
                      <span class="font-bold text-base sm:text-lg">Kalifind</span>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
