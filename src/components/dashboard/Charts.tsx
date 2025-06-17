import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Data for the donut chart
const donutData = [
  { name: "Red Hat", value: 15000, color: "#EF4444" },
  { name: "Cricket bat", value: 20000, color: "#10B981" },
];

// Data for the bar chart
const barData = [
  { month: "JAN", searches: 200, clicks: 250, cart: 180 },
  { month: "FEB", searches: 280, clicks: 320, cart: 240 },
  { month: "MAR", searches: 220, clicks: 280, cart: 200 },
  { month: "APR", searches: 320, clicks: 450, cart: 380 },
  { month: "MAY", searches: 380, clicks: 520, cart: 420 },
];

export function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Donut Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-dashboard-border">
        <h3 className="text-lg font-semibold text-dashboard-text-primary mb-6">
          Top 10 Clicked Product
        </h3>

        <div className="flex items-center justify-center mb-6">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={donutData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                dataKey="value"
              >
                {donutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {donutData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-dashboard-text-secondary">
                  {item.name}: {(item.value / 1000).toFixed(0)}k
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-dashboard-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-dashboard-text-primary">
            Company Facts
          </h3>

          {/* Legend */}
          <div className="flex space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-dashboard-accent-blue rounded-full" />
              <span className="text-dashboard-text-secondary">
                Total Searches
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-dashboard-accent-red rounded-full" />
              <span className="text-dashboard-text-secondary">
                Total Clicks
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-dashboard-accent-green rounded-full" />
              <span className="text-dashboard-text-secondary">
                Added to cart
              </span>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={barData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              domain={[0, 600]}
              ticks={[0, 200, 400, 600]}
            />
            <Bar
              dataKey="searches"
              fill="#3B82F6"
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
            <Bar
              dataKey="clicks"
              fill="#EF4444"
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
            <Bar
              dataKey="cart"
              fill="#10B981"
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
