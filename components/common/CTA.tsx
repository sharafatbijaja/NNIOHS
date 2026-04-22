import React from "react";
import { ArrowRight, Sparkles, Zap, Target, CheckCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

/**
 * CTA Component Types
 */
export type CTAVariant =
  | "primary"
  | "secondary"
  | "gradient"
  | "dark"
  | "minimal";
export type CTASize = "small" | "medium" | "large";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: CTAVariant;
  size?: CTASize;
  icon?: React.ReactNode;
  secondaryButton?: {
    text: string;
    link: string;
  };
}

/**
 * CTA Component
 * Reusable call-to-action component with multiple variants
 * Can be used across all pages for consistent CTAs
 */
const CTA = ({
  title,
  description,
  buttonText,
  buttonLink,
  variant = "primary",
  size = "medium",
  icon,
  secondaryButton,
}: CTAProps) => {
  const sizeClasses = {
    small: "py-8 px-6",
    medium: "py-12 px-8",
    large: "py-16 px-12",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r text-white",
    secondary:
      "bg-white dark:bg-slate-800 text-gray-900 dark:text-white border-2 border-primary",
    gradient:
      "bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white",
    dark: "bg-slate-900 text-white border border-slate-700",
    minimal:
      "bg-gray-50 dark:bg-slate-800/50 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700",
  };

  return (
    <div
      className={`overflow-hidden border-2 border-primary/10 rounded-3xl ${sizeClasses[size]} ${variantClasses[variant]} shadow-xl hover:shadow-2xl transition-all duration-300`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        {icon && (
          <div className="flex justify-center mb-6 animate-pulse">
            <div className="text-primary p-4 bg-primary/5 rounded-full backdrop-blur-sm border border-primary">
              {icon}
            </div>
          </div>
        )}

        {/* Title */}
        <h2
          className={`font-bold mb-4 ${
            size === "large" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
          }`}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className={`my-10 ${
            variant === "primary" ||
            variant === "gradient" ||
            variant === "dark"
              ? ""
              : "text-gray-600 dark:text-gray-400"
          } ${size === "large" ? "text-lg" : "text-base"}`}
        >
          {description}
        </p>

        {/* Buttons */}

        <div>
          <Button size="lg" asChild className="px-5">
            <Link href="/">
              <CheckCheck className="w-5 h-5 mr-2" />
              Apply Now
            </Link>
          </Button>

          <Button variant="link" size="lg" asChild>
            <Link href="/">
              <ArrowRight className="w-5 h-5 mr-2" />
              Eligibility Criteria
            </Link>
          </Button>
        </div>

        {/* 

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={buttonLink}
            className={`bg-primary/10 inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
              variant === "primary" || variant === "gradient" || variant === "dark"
                ? "border border-primary text-gray-900 dark:text-gray-100 "
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Link>

          {secondaryButton && (
            <Link
            href={secondaryButton.link}
            className={`bg-primary/10 inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
              variant === "primary" || variant === "gradient" || variant === "dark"
                ? "border-1 border-primary text-gray-900 dark:text-gray-100 "
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
          >
              {secondaryButton.text} <ArrowRight className="w-5 h-5" />
            </Link>
            
          )}
        </div> */}
      </div>
    </div>
  );
};

/**
 * Pre-configured CTA variants for common use cases
 */
export const CTASections = {
  // Primary CTA - Main call to action
  Primary: (props: Omit<CTAProps, "variant">) => (
    <CTA {...props} variant="primary" />
  ),

  // Secondary CTA - Alternative style
  Secondary: (props: Omit<CTAProps, "variant">) => (
    <CTA {...props} variant="secondary" />
  ),

  // Gradient CTA - Eye-catching gradient
  Gradient: (props: Omit<CTAProps, "variant">) => (
    <CTA {...props} variant="gradient" />
  ),

  // Dark CTA - Dark theme
  Dark: (props: Omit<CTAProps, "variant">) => <CTA {...props} variant="dark" />,

  // Minimal CTA - Clean and simple
  Minimal: (props: Omit<CTAProps, "variant">) => (
    <CTA {...props} variant="minimal" />
  ),

  // Large CTA - Prominent and spacious
  Large: (props: Omit<CTAProps, "size">) => <CTA {...props} size="large" />,

  // Small CTA - Compact
  Small: (props: Omit<CTAProps, "size">) => <CTA {...props} size="small" />,
};

/**
 * Pre-built CTA sections with icons
 */
export const PrebuiltCTA = {
  // Get Started CTA
  GetStarted: () => (
    <CTA
      title="Ready to Get Started?"
      description="Transform your ideas into reality with our expert solutions. Join thousands of satisfied clients today."
      buttonText="Start Your Project"
      buttonLink="/contact"
      variant="primary"
      size="large"
      icon={<Sparkles className="w-8 h-8" />}
    />
  ),

  // Contact CTA
  Contact: () => (
    <CTA
      title="Let's Work Together"
      description="Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing."
      buttonText="Contact Us"
      buttonLink="/contact"
      variant="gradient"
      size="medium"
      icon={<Target className="w-8 h-8" />}
    />
  ),

  // Newsletter CTA
  Newsletter: () => (
    <CTA
      title="Stay Updated"
      description="Subscribe to our newsletter for the latest updates, tips, and exclusive content delivered to your inbox."
      buttonText="Subscribe Now"
      buttonLink="/contact"
      variant="minimal"
      size="medium"
      icon={<Zap className="w-8 h-8" />}
    />
  ),

  // Services CTA
  Services: () => (
    <CTA
      title="Explore Our Services"
      description="Discover how our comprehensive services can help your business grow and succeed in the digital world."
      buttonText="View Services"
      buttonLink="/services"
      variant="secondary"
      size="medium"
      secondaryButton={{
        text: "Get a Quote",
        link: "/contact",
      }}
    />
  ),
};

export default CTA;
