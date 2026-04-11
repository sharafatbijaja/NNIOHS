"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageWrapper Component
 * 
 * A beautiful, consistent wrapper for all pages
 * Provides:
 * - Smooth fade-in animation
 * - Consistent spacing and padding
 * - Responsive container
 * - Proper overflow handling
 * 
 * Usage:
 * <PageWrapper>
 *   <YourPageContent />
 * </PageWrapper>
 */

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const PageWrapper = ({ children, className = "" }: PageWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`overflow-hidden bg-radial from-primary/10 dark:from-slate-950 to-white dark:to-gray-950 pb-18 min-h-screen  ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
