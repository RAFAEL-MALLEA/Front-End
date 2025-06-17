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
        "bg-white rounded-xl p-6 shadow-sm border border-dashboard-border",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-dashboard-text-secondary text-sm font-medium mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-dashboard-text-primary">
            {value}
          </p>
        </div>

        <div className="relative w-20 h-20">
          {/* Background circle */}
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="#E5E7EB"
              strokeWidth="6"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className={colors.ring}
            />
          </svg>

          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={cn("text-sm font-semibold", colors.text)}>
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
