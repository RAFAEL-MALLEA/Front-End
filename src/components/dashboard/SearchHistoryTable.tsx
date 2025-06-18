import { FilterPanel } from "./FilterPanel";
import { useDashboard } from "@/context/DashboardContext";

export function SearchHistoryTable() {
  const { filteredData } = useDashboard();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-dashboard-border">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-dashboard-border">
        <h3 className="text-lg font-semibold text-dashboard-text-primary">
          Search History
        </h3>

        <FilterPanel />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-dashboard-text-secondary uppercase tracking-wider">
                Search Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-dashboard-text-secondary uppercase tracking-wider">
                Search Quantity
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-dashboard-text-secondary uppercase tracking-wider">
                Clicks
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-dashboard-text-secondary uppercase tracking-wider">
                Conversion Rate
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-dashboard-text-secondary uppercase tracking-wider">
                Total Sales
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dashboard-border">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-dashboard-text-primary">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-dashboard-text-secondary">
                    {item.quantity.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-dashboard-text-secondary">
                    {item.clicks.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-dashboard-text-secondary">
                    {item.conversionRate}%
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-dashboard-text-primary">
                    ${item.totalSales.toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-400 text-xl">🔍</span>
                    </div>
                    <p className="text-sm">No results found</p>
                    <p className="text-xs text-gray-400">
                      Try adjusting your filters
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Results Count */}
      {filteredData.length > 0 && (
        <div className="px-6 py-3 border-t border-dashboard-border bg-gray-50">
          <p className="text-sm text-gray-600">
            Showing {filteredData.length} result
            {filteredData.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}
    </div>
  );
}
