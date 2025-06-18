import React, { createContext, useContext, useState, useMemo } from "react";

export interface SearchData {
  id: string;
  name: string;
  quantity: number;
  clicks: number;
  conversionRate: number;
  totalSales: number;
  category: string;
  month: string;
}

export interface FilterState {
  searchName: string;
  minQuantity: number;
  maxQuantity: number;
  minClicks: number;
  maxClicks: number;
  minConversionRate: number;
  maxConversionRate: number;
  minTotalSales: number;
  maxTotalSales: number;
}

interface DashboardContextType {
  searchData: SearchData[];
  filteredData: SearchData[];
  filters: FilterState;
  updateFilter: (field: keyof FilterState, value: string | number) => void;
  resetFilters: () => void;
  getChartData: () => {
    donutData: Array<{
      name: string;
      value: number;
      color: string;
      percentage: number;
    }>;
    barData: Array<{
      month: string;
      searches: number;
      clicks: number;
      cart: number;
    }>;
  };
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

// Extended sample data with relationships
const sampleSearchData: SearchData[] = [
  {
    id: "1",
    name: "Red Hat",
    quantity: 300,
    clicks: 15000,
    conversionRate: 9,
    totalSales: 2000000,
    category: "product",
    month: "JAN",
  },
  {
    id: "2",
    name: "Cricket Bat",
    quantity: 350,
    clicks: 20000,
    conversionRate: 12,
    totalSales: 2500000,
    category: "product",
    month: "JAN",
  },
  {
    id: "3",
    name: "Blue Shoes",
    quantity: 280,
    clicks: 12000,
    conversionRate: 8,
    totalSales: 1800000,
    category: "product",
    month: "FEB",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    quantity: 150,
    clicks: 25000,
    conversionRate: 15,
    totalSales: 3200000,
    category: "electronics",
    month: "FEB",
  },
  {
    id: "5",
    name: "Wireless Mouse",
    quantity: 420,
    clicks: 8000,
    conversionRate: 6,
    totalSales: 950000,
    category: "electronics",
    month: "MAR",
  },
  {
    id: "6",
    name: "Coffee Mug",
    quantity: 500,
    clicks: 5000,
    conversionRate: 4,
    totalSales: 450000,
    category: "home",
    month: "MAR",
  },
  {
    id: "7",
    name: "Running Shoes",
    quantity: 380,
    clicks: 18000,
    conversionRate: 11,
    totalSales: 2200000,
    category: "sports",
    month: "APR",
  },
  {
    id: "8",
    name: "Smartphone",
    quantity: 200,
    clicks: 35000,
    conversionRate: 18,
    totalSales: 4200000,
    category: "electronics",
    month: "APR",
  },
  {
    id: "9",
    name: "Backpack",
    quantity: 320,
    clicks: 14000,
    conversionRate: 10,
    totalSales: 1600000,
    category: "accessories",
    month: "MAY",
  },
  {
    id: "10",
    name: "Tablet",
    quantity: 180,
    clicks: 22000,
    conversionRate: 14,
    totalSales: 2800000,
    category: "electronics",
    month: "MAY",
  },
];

const initialFilters: FilterState = {
  searchName: "",
  minQuantity: 0,
  maxQuantity: 1000,
  minClicks: 0,
  maxClicks: 50000,
  minConversionRate: 0,
  maxConversionRate: 20,
  minTotalSales: 0,
  maxTotalSales: 5000000,
};

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const filteredData = useMemo(() => {
    return sampleSearchData.filter((item) => {
      return (
        item.name.toLowerCase().includes(filters.searchName.toLowerCase()) &&
        item.quantity >= filters.minQuantity &&
        item.quantity <= filters.maxQuantity &&
        item.clicks >= filters.minClicks &&
        item.clicks <= filters.maxClicks &&
        item.conversionRate >= filters.minConversionRate &&
        item.conversionRate <= filters.maxConversionRate &&
        item.totalSales >= filters.minTotalSales &&
        item.totalSales <= filters.maxTotalSales
      );
    });
  }, [filters]);

  const updateFilter = (field: keyof FilterState, value: string | number) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const getChartData = () => {
    // Group filtered data for donut chart (top clicked products)
    const topProducts = filteredData
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 2);

    const totalClicks = topProducts.reduce((sum, item) => sum + item.clicks, 0);

    const donutData = topProducts.map((item, index) => ({
      name: item.name,
      value: item.clicks,
      color: index === 0 ? "#EF4444" : "#10B981",
      percentage:
        totalClicks > 0
          ? Number(((item.clicks / totalClicks) * 100).toFixed(1))
          : 0,
    }));

    // Group filtered data by month for bar chart
    const monthlyData = ["JAN", "FEB", "MAR", "APR", "MAY"].map((month) => {
      const monthData = filteredData.filter((item) => item.month === month);
      return {
        month,
        searches: monthData.reduce((sum, item) => sum + item.quantity, 0),
        clicks: monthData.reduce((sum, item) => sum + item.clicks, 0) / 1000, // Scale down for better visualization
        cart: Math.round(
          monthData.reduce(
            (sum, item) => sum + (item.clicks * item.conversionRate) / 100,
            0,
          ) / 1000,
        ), // Calculated cart adds
      };
    });

    return { donutData, barData: monthlyData };
  };

  return (
    <DashboardContext.Provider
      value={{
        searchData: sampleSearchData,
        filteredData,
        filters,
        updateFilter,
        resetFilters,
        getChartData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
