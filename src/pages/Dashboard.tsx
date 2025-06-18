import { useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { KPICard } from "@/components/dashboard/KPICard";
import { Charts } from "@/components/dashboard/Charts";
import { SearchHistoryTable } from "@/components/dashboard/SearchHistoryTable";
import { DashboardProvider } from "@/context/DashboardContext";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-dashboard-text-primary">
                      Dashboard
                    </h1>
                    {/* Date Range */}
                    <div className="flex items-center space-x-2 text-sm sm:text-base text-dashboard-text-secondary">
                      <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="whitespace-nowrap">
                        11 may 2022 - 3 june 2022
                      </span>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    <KPICard
                      title="Total Search"
                      value="50,000"
                      percentage={67}
                      color="red"
                    />
                    <KPICard
                      title="CTR"
                      value="50%"
                      percentage={60}
                      color="blue"
                    />
                    <KPICard
                      title="Total Sales"
                      value="$9,000.00"
                      percentage={85}
                      color="green"
                    />
                  </div>

                  {/* Charts */}
                  <Charts />

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
