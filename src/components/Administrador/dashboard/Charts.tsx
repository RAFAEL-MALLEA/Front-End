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
const Data = [
  { month: "JAN", A: 200, B: 250, C: 180 },
  { month: "FEB", A: 280, B: 320, C: 240 },
  { month: "MAR", A: 220, B: 280, C: 200 },
  { month: "APR", A: 320, B: 450, C: 380 },
  { month: "MAY", A: 380, B: 520, C: 420 },
  { month: "JUN", A: 400, B: 550, C: 450 },
  { month: "JUL", A: 450, B: 580, C: 480 },
  { month: "AUG", A: 480, B: 600, C: 500 },
  { month: "SEP", A: 500, B: 620, C: 520 },
  { month: "OCT", A: 520, B: 640, C: 540 },
  { month: "NOV", A: 540, B: 660, C: 560 },
  { month: "DEC", A: 600, B: 700, C: 580 },
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
                  {entry.dataKey === "A"
                    ? "Total A"
                    : entry.dataKey === "B"
                      ? "Total B"
                      : "Total C"}
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
    <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 sm:gap-6">


      {/* CLASIFICACION POR ABC */}
      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm border border-dashboard-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
          <h3 className="text-base sm:text-lg font-semibold text-dashboard-text-primary">
            Clasification by ABC
          </h3>

          {/* Legend */}
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-dashboard-accent-blue rounded-full" />
              <span className="text-dashboard-text-secondary whitespace-nowrap">
                Total A
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-dashboard-accent-red rounded-full" />
              <span className="text-dashboard-text-secondary whitespace-nowrap">
                Total B
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-dashboard-accent-green rounded-full" />
              <span className="text-dashboard-text-secondary whitespace-nowrap">
                Total C
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
            data={Data}
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
              dataKey="A"
              fill="#3B82F6"
              radius={[1, 1, 0, 0]}
              maxBarSize={16}
              className="sm:max-w-5"
            />
            <Bar
              dataKey="B"
              fill="#EF4444"
              radius={[1, 1, 0, 0]}
              maxBarSize={16}
              className="sm:max-w-5"
            />
            <Bar
              dataKey="C"
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
