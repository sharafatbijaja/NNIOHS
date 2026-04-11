import React from 'react';

/**
 * Container Component
 * 
 * A consistent container component for responsive layouts
 * Provides:
 * - Max-width constraint (max-w-7xl)
 * - Horizontal centering
 * - Consistent horizontal padding
 * - Responsive padding for different screen sizes
 * 
 * Usage:
 * <Container>
 *   <YourContent />
 * </Container>
 */

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
