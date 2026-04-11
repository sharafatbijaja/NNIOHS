"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageTitle Component
 * 
 * A beautiful, consistent page title component for all pages
 * Provides:
 * - Animated title with fade-in effect
 * - Gradient text for emphasis
 * - Description/subtitle support
 * - Responsive typography
 * - Center-aligned layout
 * 
 * Usage:
 * <PageTitle
 *   title="Services"
 *   subtitle="What I offer"
 *   description="Explore my professional services"
 * />
 */

type PageTitleProps = {
  title: string;
  subtitle?: string;
  description?: string;
};

const PageTitle = ({ title, subtitle, description }: PageTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container max-w-7xl mx-auto pt-40 px-5"
    >
      {/* Subtitle (optional) */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm md:text-base font-semibolder text-primary uppercase tracking-widest mb-4"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
      >
        <span className="bg-radial from-primary brightness-130 to-green-900 bg-clip-text text-transparent font-bold">
          {title}
        </span>
      </motion.h1>

      {/* Description (optional) */}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-muted-foreground dark:text-gray-300 max-w-2xl"
        >
          {description}
        </motion.p>
      )}

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="h-0.5 bg-primary mt-8 rounded-full"
      />
    </motion.div>
  );
};

export default PageTitle;
