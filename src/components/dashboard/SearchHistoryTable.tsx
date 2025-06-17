import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const searchHistory = [
  {
    name: "Project 1",
    quantity: 300,
    clicks: 600,
    conversionRate: "9%",
    totalSales: "$2,000,000",
  },
  {
    name: "Project 2",
    quantity: 300,
    clicks: 600,
    conversionRate: "9%",
    totalSales: "$2,000,000",
  },
  {
    name: "Project 3",
    quantity: 300,
    clicks: 600,
    conversionRate: "9%",
    totalSales: "$2,000,000",
  },
  {
    name: "Project 4",
    quantity: 300,
    clicks: 600,
    conversionRate: "9%",
    totalSales: "$2,000,000",
  },
  {
    name: "Project 5",
    quantity: 300,
    clicks: 600,
    conversionRate: "9%",
    totalSales: "$2,000,000",
  },
];

export function SearchHistoryTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-dashboard-border">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-dashboard-border">
        <h3 className="text-lg font-semibold text-dashboard-text-primary">
          Search History
        </h3>

        <Button variant="outline" className="flex items-center space-x-2">
          <span className="text-sm">Filter</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
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
            {searchHistory.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-dashboard-text-primary">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-sm text-dashboard-text-secondary">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 text-sm text-dashboard-text-secondary">
                  {item.clicks}
                </td>
                <td className="px-6 py-4 text-sm text-dashboard-text-secondary">
                  {item.conversionRate}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-dashboard-text-primary">
                  {item.totalSales}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
