import { useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import { Sidebar } from "@/components/Administrador/dashboard/Sidebar";
import { Header } from "@/components/Administrador/dashboard/Header";
import { KPICard } from "@/components/Administrador/dashboard/KPICard";
import { Charts } from "@/components/Administrador/dashboard/Charts";
import { SearchHistoryTable } from "@/components/Administrador/dashboard/SearchHistoryTable";
import { DashboardProvider } from "@/context/DashboardContext";
import { text } from "stream/consumers";
import OverviewWidget from "@/components/Administrador/dashboard/OverviewWidget";
import TotalWidget from "@/components/Administrador/dashboard/TotalWidget";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Metrics = [
    { id: 1, cantidad: "cantidad  en numero", cantidad2: "cantidad  en numero", cantidad3: "cantidad " },
    { id: 2, cantidad: "cantidad  en numero", cantidad2: "cantidad  en numero", cantidad3: "cantidad " },
    { id: 3, cantidad: "cantidad  en numero", cantidad2: "cantidad  en numero", cantidad3: "cantidad " },
    { id: 4, cantidad: "cantidad  en numero", cantidad2: "cantidad  en numero", cantidad3: "cantidad " },
    { id: 5, cantidad: "cantidad  en numero", cantidad2: "cantidad  en numero", cantidad3: "cantidad " },
    { id: 6, cantidad: "cantidad  en numero", cantidad2: "cantidad  en numero", cantidad3: "cantidad " },
    { id: 7, cantidad: "cantidad  en numero", cantidad2: "cantidad  en numero", cantidad3: "cantidad " },
    { id: 8, cantidad: "cantidad  en numero", cantidad2: "cantidad  en numero", cantidad3: "cantidad " },
    { id: 9, cantidad: "cantidad  en numero", cantidad2: "cantidad  en numero", cantidad3: "cantidad " }
  ]


  return (
    <DashboardProvider>
      <div className="min-h-screen bg-dashboard-bg">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-25 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

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
            <div className="md:hidden bg-white border-b border-dashboard-border">
              <div className="flex items-center justify-between p-3 sm:p-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 rounded-md text-dashboard-text-secondary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sidebar"
                  aria-label="Toggle sidebar"
                >
                  {sidebarOpen ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </button>
                <h1 className="text-lg sm:text-xl font-semibold text-dashboard-text-primary">
                  Dashboard
                </h1>
                <div className="w-9 sm:w-10"></div> {/* Spacer for centering */}
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:block">
              <Header />
            </div>

            {/* Dashboard Content */}
            <main className="flex-1 overflow-y-auto">
              <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Dashboard Title and Date Range */}


                  {/* KPI Cards */}
                {/* Cards donde se muestran los cantidads de las empresas */}


                    {/* Search History Table */}
                    <SearchHistoryTable />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
