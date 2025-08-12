import { useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { KPICard } from "@/components/dashboard/KPICard";
import { Charts } from "@/components/dashboard/Charts";
import { SearchHistoryTable } from "@/components/dashboard/SearchHistoryTable";
import { DashboardProvider } from "@/context/DashboardContext";

export default function Configuracion() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardProvider>


        {/* Layout Container */}
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar
            className={`
              fixed md:static inset-y-0 left-0 z-50
              w-56 sm:w-64
              transform transition-transform duration-300 ease-in-out
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}
          />

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {/* Mobile Header */}


            {/* Desktop Header */}
            <div className="hidden md:block">
              <Header />
            </div>

            {/* Dashboard Content */}
            <main className="flex-1 overflow-y-auto">

            </main>
          </div>
        </div>
    </DashboardProvider>
  );
}
