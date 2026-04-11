import React from "react";
import { LucideIcon } from "lucide-react";

/**
 * Stats Counter Component Types
 */
export type StatsVariant = "default" | "gradient" | "minimal" | "dark";

interface StatItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
  variant?: StatsVariant;
}

/**
 * Stat Item Component
 * Individual stat item with icon, value, and label
 */
const StatItem = ({
  icon: Icon,
  value,
  label,
  description,
  variant = "default",
}: StatItemProps) => {
  const variantClasses = {
    default: "bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700",
    gradient: "bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 border border-primary/20",
    minimal: "bg-transparent",
    dark: "bg-slate-900 border border-slate-700",
  };

  const iconClasses = {
    default: "bg-primary/10 text-primary",
    gradient: "bg-gradient-to-br from-primary to-primary/80 text-white",
    minimal: "bg-primary/10 text-primary",
    dark: "bg-primary/20 text-primary",
  };

  return (
    <div
      className={`rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${variantClasses[variant]}`}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center rounded-xl mb-4 p-3 ${iconClasses[variant]}`}>
        <Icon className="w-6 h-6" />
      </div>

      {/* Value */}
      <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
        {value}
      </div>

      {/* Label */}
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
        {label}
      </div>

      {/* Description */}
      {description && (
        <div className="text-xs text-gray-500 dark:text-gray-500">
          {description}
        </div>
      )}
    </div>
  );
};

/**
 * Stats Counter Component
 * Displays multiple statistics in a responsive grid
 */
interface StatsCounterProps {
  stats: Array<{
    icon: LucideIcon;
    value: string;
    label: string;
    description?: string;
  }>;
  columns?: 2 | 3 | 4;
  variant?: StatsVariant;
  className?: string;
}

const StatsCounter = ({
  stats,
  columns = 4,
  variant = "default",
  className = "",
}: StatsCounterProps) => {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]} ${className}`}>
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          {...stat}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default StatsCounter;
