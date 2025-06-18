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

            {/* Search Quantity Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Quantity
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="number"
                    value={filters.minQuantity}
                    onChange={(e) =>
                      updateFilter("minQuantity", Number(e.target.value))
                    }
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="text-xs text-gray-500">
                    Min: {filters.minQuantity}
                  </span>
                </div>
                <div>
                  <input
                    type="number"
                    value={filters.maxQuantity}
                    onChange={(e) =>
                      updateFilter("maxQuantity", Number(e.target.value))
                    }
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="text-xs text-gray-500">
                    Max: {filters.maxQuantity}
                  </span>
                </div>
              </div>
            </div>

            {/* Clicks Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Clicks Range
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="number"
                    value={filters.minClicks}
                    onChange={(e) =>
                      updateFilter("minClicks", Number(e.target.value))
                    }
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="text-xs text-gray-500">
                    Min: {filters.minClicks.toLocaleString()}
                  </span>
                </div>
                <div>
                  <input
                    type="number"
                    value={filters.maxClicks}
                    onChange={(e) =>
                      updateFilter("maxClicks", Number(e.target.value))
                    }
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="text-xs text-gray-500">
                    Max: {filters.maxClicks.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Conversion Rate Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Conversion Rate (%)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="number"
                    value={filters.minConversionRate}
                    onChange={(e) =>
                      updateFilter("minConversionRate", Number(e.target.value))
                    }
                    placeholder="Min %"
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="text-xs text-gray-500">
                    Min: {filters.minConversionRate}%
                  </span>
                </div>
                <div>
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
              </div>
            </div>

            {/* Total Sales Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Sales ($)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="number"
                    value={filters.minTotalSales}
                    onChange={(e) =>
                      updateFilter("minTotalSales", Number(e.target.value))
                    }
                    placeholder="Min $"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="text-xs text-gray-500">
                    Min: ${filters.minTotalSales.toLocaleString()}
                  </span>
                </div>
                <div>
                  <input
                    type="number"
                    value={filters.maxTotalSales}
                    onChange={(e) =>
                      updateFilter("maxTotalSales", Number(e.target.value))
                    }
                    placeholder="Max $"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="text-xs text-gray-500">
                    Max: ${filters.maxTotalSales.toLocaleString()}
                  </span>
                </div>
              </div>
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
