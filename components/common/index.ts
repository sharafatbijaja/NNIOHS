/**
 * Common Components Index
 * Central export point for all reusable common components
 * Makes it easy to import components from one place
 */

// Layout & Wrapper Components
export { default as PageWrapper } from "./PageWrapper";
export { default as PageTitle } from "./PageTitle";
export { default as Container } from "./Container";

// Interactive Components
export { default as CTA, CTASections, PrebuiltCTA } from "./CTA";
export { default as FeatureCard, FeatureGrid } from "./FeatureCard";
export { default as TestimonialCard, TestimonialGrid } from "./TestimonialCard";
export { default as StatsCounter } from "./StatsCounter";
export { default as Badge } from "./Badge";

// Types
export type { CTAVariant, CTASize } from "./CTA";
export type { FeatureCardVariant, FeatureCardSize } from "./FeatureCard";
export type { TestimonialVariant } from "./TestimonialCard";
export type { StatsVariant } from "./StatsCounter";
export type { BadgeVariant, BadgeSize } from "./Badge";
