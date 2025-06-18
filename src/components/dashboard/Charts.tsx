import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

// Data for the donut chart (STATIC - Total data)
const donutData = [
  { name: "Red Hat", value: 10000, color: "#EF4444", percentage: 33.3 },
  { name: "Cricket bat", value: 20000, color: "#10B981", percentage: 66.7 },
];

// Data for the bar chart (STATIC - Total data)
const barData = [
  { month: "JAN", searches: 200, clicks: 250, cart: 180 },
  { month: "FEB", searches: 280, clicks: 320, cart: 240 },
  { month: "MAR", searches: 220, clicks: 280, cart: 200 },
  { month: "APR", searches: 320, clicks: 450, cart: 380 },
  { month: "MAY", searches: 380, clicks: 520, cart: 420 },
];

// Custom tooltip for donut chart
const DonutTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: data.color }}
          />
          <span className="font-medium text-dashboard-text-primary">
            {data.name}
          </span>
        </div>
        <div className="space-y-1 text-sm">
          <p className="text-dashboard-text-secondary">
            Clicks:{" "}
            <span className="font-medium text-dashboard-text-primary">
              {data.value.toLocaleString()}
            </span>
          </p>
          <p className="text-dashboard-text-secondary">
            Percentage:{" "}
            <span className="font-medium text-dashboard-text-primary">
              {data.percentage}%
            </span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

// Custom tooltip for bar chart
const BarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="font-medium text-dashboard-text-primary mb-2">{label}</p>
        <div className="space-y-1">
          {payload.map((entry: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-sm text-dashboard-text-secondary">
                  {entry.dataKey === "searches"
                    ? "Total Searches"
                    : entry.dataKey === "clicks"
                      ? "Total Clicks"
                      : "Added to Cart"}
                  :
                </span>
              </div>
              <span className="text-sm font-medium text-dashboard-text-primary">
                {entry.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export function Charts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
      {/* Donut Chart */}
      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm border border-dashboard-border">
        <h3 className="text-base sm:text-lg font-semibold text-dashboard-text-primary mb-4 sm:mb-6">
          Top 10 Clicked Product
        </h3>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          {/* Chart Container */}
          <div className="flex items-center justify-center flex-shrink-0">
            <ResponsiveContainer
              width={180}
              height={180}
              className="sm:w-48 sm:h-48"
            >
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                  stroke="none"
                  style={{ cursor: "pointer" }}
                >
                  {donutData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      style={{
                        filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))",
                        transition: "all 0.2s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.filter =
                          "drop-shadow(0px 4px 8px rgba(0,0,0,0.2))";
                        e.target.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.filter =
                          "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))";
                        e.target.style.transform = "scale(1)";
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<DonutTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="space-y-2 sm:space-y-3 flex-1">
            {donutData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2 min-w-0">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs sm:text-sm text-dashboard-text-secondary truncate">
                    {item.name}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-dashboard-text-primary ml-2">
                  {(item.value / 1000).toFixed(0)}k
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm border border-dashboard-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
          <h3 className="text-base sm:text-lg font-semibold text-dashboard-text-primary">
            Company Facts
          </h3>

          {/* Legend */}
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-dashboard-accent-blue rounded-full" />
              <span className="text-dashboard-text-secondary whitespace-nowrap">
                Total Searches
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-dashboard-accent-red rounded-full" />
              <span className="text-dashboard-text-secondary whitespace-nowrap">
                Total Clicks
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-dashboard-accent-green rounded-full" />
              <span className="text-dashboard-text-secondary whitespace-nowrap">
                Added to cart
              </span>
            </div>
          </div>
        </div>

        <ResponsiveContainer
          width="100%"
          height={200}
          className="sm:h-60 lg:h-64"
        >
          <BarChart
            data={barData}
            margin={{ top: 10, right: 10, left: 5, bottom: 5 }}
            style={{ cursor: "pointer" }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6B7280" }}
              className="sm:text-xs"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6B7280" }}
              domain={[0, 600]}
              ticks={[0, 200, 400, 600]}
              className="sm:text-xs"
            />
            <Tooltip content={<BarTooltip />} />
            <Bar
              dataKey="searches"
              fill="#3B82F6"
              radius={[1, 1, 0, 0]}
              maxBarSize={16}
              className="sm:max-w-5"
            />
            <Bar
              dataKey="clicks"
              fill="#EF4444"
              radius={[1, 1, 0, 0]}
              maxBarSize={16}
              className="sm:max-w-5"
            />
            <Bar
              dataKey="cart"
              fill="#10B981"
              radius={[1, 1, 0, 0]}
              maxBarSize={16}
              className="sm:max-w-5"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
