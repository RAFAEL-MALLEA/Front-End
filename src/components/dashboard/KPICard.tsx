import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  percentage: number;
  color: "red" | "blue" | "green";
  className?: string;
}

const colorClasses = {
  red: {
    ring: "text-dashboard-accent-red",
    bg: "bg-red-50",
    text: "text-dashboard-accent-red",
  },
  blue: {
    ring: "text-dashboard-accent-blue",
    bg: "bg-blue-50",
    text: "text-dashboard-accent-blue",
  },
  green: {
    ring: "text-dashboard-accent-green",
    bg: "bg-green-50",
    text: "text-dashboard-accent-green",
  },

};

export function KPICard({
  title,
  value,
  percentage,
  color,
  className,
}: KPICardProps) {
  const colors = colorClasses[color];

  // Calculate stroke-dasharray for the circle (circumference = 2 * π * r)
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <div
      className={cn(
        "bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm border border-dashboard-border hover:shadow-md transition-shadow",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        {/* Content Section */}
        <div className="flex-1 min-w-0 pr-3 sm:pr-4">
          <p className="text-dashboard-text-secondary text-xs sm:text-sm font-medium mb-1 sm:mb-2 truncate">
            {title}
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-dashboard-text-primary truncate">
            {value}
          </p>
        </div>

        {/* Chart Section */}
        <div className="relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex-shrink-0">
          {/* Background circle */}
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 80 80"
          >
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="#E5E7EB"
              strokeWidth="5"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className={cn(colors.ring, "transition-all duration-300")}
            />
          </svg>

          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={cn("text-xs sm:text-sm font-semibold", colors.text)}
            >
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
