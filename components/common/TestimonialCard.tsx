import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

/**
 * Testimonial Card Component Types
 */
export type TestimonialVariant = "default" | "gradient" | "minimal" | "dark";

interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  avatar: string;
  content: string;
  rating?: number;
  variant?: TestimonialVariant;
  className?: string;
}

/**
 * Testimonial Card Component
 * Reusable testimonial card component with multiple variants
 * Perfect for showcasing client reviews and feedback
 */
const TestimonialCard = ({
  name,
  role,
  company,
  avatar,
  content,
  rating = 5,
  variant = "default",
  className = "",
}: TestimonialCardProps) => {
  const variantClasses = {
    default: "bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700",
    gradient: "bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 border border-primary/20",
    minimal: "bg-gray-50 dark:bg-slate-800/50 border border-transparent",
    dark: "bg-slate-900 border border-slate-700",
  };

  const textClasses = {
    default: "text-gray-900 dark:text-white",
    gradient: "text-gray-900 dark:text-white",
    minimal: "text-gray-900 dark:text-white",
    dark: "text-white",
  };

  const contentClasses = {
    default: "text-gray-600 dark:text-gray-400",
    gradient: "text-gray-700 dark:text-gray-300",
    minimal: "text-gray-600 dark:text-gray-400",
    dark: "text-gray-300",
  };

  return (
    <div
      className={`rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${variantClasses[variant]} ${className}`}
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className={`w-8 h-8 ${
          variant === "gradient" ? "text-primary" : "text-gray-300 dark:text-slate-600"
        }`} />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Content */}
      <p className={`mb-6 leading-relaxed ${contentClasses[variant]}`}>
        {content}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className={`font-bold ${textClasses[variant]}`}>
            {name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {role}
            {company && ` at ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Testimonial Grid Component
 * Displays multiple testimonial cards in a responsive grid
 */
interface TestimonialGridProps {
  testimonials: Array<{
    name: string;
    role: string;
    company?: string;
    avatar: string;
    content: string;
    rating?: number;
  }>;
  columns?: 1 | 2 | 3 | 4;
  variant?: TestimonialVariant;
  className?: string;
}

const TestimonialGrid = ({
  testimonials,
  columns = 3,
  variant = "default",
  className = "",
}: TestimonialGridProps) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]} ${className}`}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          {...testimonial}
          variant={variant}
        />
      ))}
    </div>
  );
};

export { TestimonialGrid };
export default TestimonialCard;
