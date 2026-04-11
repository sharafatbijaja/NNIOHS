import React from "react";
import { LucideIcon } from "lucide-react";

/**
 * Feature Card Component Types
 */
export type FeatureCardVariant = "default" | "gradient" | "outlined" | "minimal";
export type FeatureCardSize = "small" | "medium" | "large";

interface FeatureCardProps {
  icon: LucideIcon | React.ReactNode;
  title: string;
  description: string;
  variant?: FeatureCardVariant;
  size?: FeatureCardSize;
  className?: string;
}

/**
 * Feature Card Component
 * Reusable feature card component with multiple variants
 * Perfect for showcasing features, services, or benefits
 */
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant = "default",
  size = "medium",
  className = "",
}: FeatureCardProps) => {
  const sizeClasses = {
    small: "p-5",
    medium: "p-6",
    large: "p-8",
  };

  const iconSizeClasses = {
    small: "w-10 h-10",
    medium: "w-12 h-12",
    large: "w-14 h-14",
  };

  const titleSizeClasses = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  const variantClasses = {
    default: "bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary",
    gradient: "bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 border border-primary/20 hover:border-primary/40",
    outlined: "bg-transparent border-2 border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary",
    minimal: "bg-gray-50 dark:bg-slate-800/50 border border-transparent hover:border-gray-200 dark:hover:border-slate-700",
  };

  const iconVariantClasses = {
    default: "bg-primary/10 text-primary",
    gradient: "bg-gradient-to-br from-primary to-primary/80 text-white",
    outlined: "bg-transparent text-primary border-2 border-primary",
    minimal: "bg-white dark:bg-slate-700 text-primary",
  };

  const IconComponent = typeof Icon === "function" ? <Icon className={iconSizeClasses[size]} /> : Icon;

  return (
    <div
      className={`rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center rounded-xl mb-4 ${iconVariantClasses[variant]} ${iconSizeClasses[size]}`}>
        {IconComponent}
      </div>

      {/* Title */}
      <h3 className={`font-bold mb-3 text-gray-900 dark:text-white ${titleSizeClasses[size]}`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

/**
 * Feature Grid Component
 * Displays multiple feature cards in a responsive grid
 */
interface FeatureGridProps {
  features: Array<{
    icon: LucideIcon | React.ReactNode;
    title: string;
    description: string;
  }>;
  columns?: 1 | 2 | 3 | 4;
  variant?: FeatureCardVariant;
  size?: FeatureCardSize;
  className?: string;
}

const FeatureGrid = ({
  features,
  columns = 3,
  variant = "default",
  size = "medium",
  className = "",
}: FeatureGridProps) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]} ${className}`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          variant={variant}
          size={size}
        />
      ))}
    </div>
  );
};

export { FeatureGrid };
export default FeatureCard;
