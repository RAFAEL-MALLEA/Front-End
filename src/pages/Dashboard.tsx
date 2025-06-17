import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { KPICard } from "@/components/dashboard/KPICard";
import { Charts } from "@/components/dashboard/Charts";
import { SearchHistoryTable } from "@/components/dashboard/SearchHistoryTable";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-dashboard-bg">
      {/* Sidebar */}
      <Sidebar className="hidden lg:block" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  );
}
