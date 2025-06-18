import { useState } from "react";
import { Menu, X } from "lucide-react";
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
      <div className="flex h-screen bg-dashboard-bg">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <Sidebar
          className={`
        fixed lg:static lg:translate-x-0 z-50 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
          {/* Mobile menu button */}
          <div className="lg:hidden p-4 bg-white border-b border-dashboard-border">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md text-dashboard-text-secondary hover:bg-gray-100"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Header */}
          <Header />

          {/* Dashboard Content */}
          <main className="flex-1 overflow-y-auto p-4 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                <KPICard
                  title="Total Search"
                  value="50,000"
                  percentage={67}
                  color="red"
                />
                <KPICard title="CTR" value="50%" percentage={60} color="blue" />
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
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
