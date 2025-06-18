import { useState } from "react";
import { ChevronDown, Search, X, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDashboard } from "@/context/DashboardContext";

export function FilterPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { filters, updateFilter, resetFilters, filteredData, searchData } =
    useDashboard();

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <span className="text-sm">Filter</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
        {filteredData.length !== searchData.length && (
          <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {filteredData.length}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 p-6 z-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Filters</h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={resetFilters}
                className="flex items-center space-x-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {/* Search Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Name
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={filters.searchName}
                  onChange={(e) => updateFilter("searchName", e.target.value)}
                  placeholder="Filter by product name..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Search Quantity Max */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Search Quantity
              </label>
              <input
                type="number"
                value={filters.maxQuantity}
                onChange={(e) =>
                  updateFilter("maxQuantity", Number(e.target.value))
                }
                placeholder="Max Quantity"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="text-xs text-gray-500">
                Max: {filters.maxQuantity}
              </span>
            </div>

            {/* Max Clicks */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Clicks
              </label>
              <input
                type="number"
                value={filters.maxClicks}
                onChange={(e) =>
                  updateFilter("maxClicks", Number(e.target.value))
                }
                placeholder="Max Clicks"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="text-xs text-gray-500">
                Max: {filters.maxClicks.toLocaleString()}
              </span>
            </div>

            {/* Max Conversion Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Conversion Rate (%)
              </label>
              <input
                type="number"
                value={filters.maxConversionRate}
                onChange={(e) =>
                  updateFilter("maxConversionRate", Number(e.target.value))
                }
                placeholder="Max %"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="text-xs text-gray-500">
                Max: {filters.maxConversionRate}%
              </span>
            </div>

            {/* Max Total Sales */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Total Sales ($)
              </label>
              <input
                type="number"
                value={filters.maxTotalSales}
                onChange={(e) =>
                  updateFilter("maxTotalSales", Number(e.target.value))
                }
                placeholder="Max Sales"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="text-xs text-gray-500">
                Max: ${filters.maxTotalSales.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-medium text-blue-600">
                {filteredData.length}
              </span>{" "}
              of <span className="font-medium">{searchData.length}</span>{" "}
              results
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
