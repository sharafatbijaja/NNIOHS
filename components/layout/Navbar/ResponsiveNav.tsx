/**
 * ResponsiveNav Component
 * 
 * Main navigation wrapper that handles responsive behavior
 * Renders both desktop and mobile navigation components
 * 
 * Functionality:
 * - Manages mobile menu visibility state
 * - Passes handlers to child navigation components
 * - Desktop nav: Always visible (hidden by CSS on mobile)
 * - Mobile nav: Toggles in/out based on state
 */

"use client"; // Client-side interactivity required
import React from 'react';
// import Nav from './Nav'; // Desktop navigation component
import Nav from './NavNNIOHS'; // Desktop navigation component
import MobileNav from './MobileNav2'; // Mobile hamburger menu

const ResponsiveNav = () => {
  // State: Controls whether mobile menu is open
  const [showNav, setShowNav] = React.useState(false);

  // Handler: Opens mobile menu (set state to true)
  const openNavHander = () => { setShowNav(true); };
  
  // Handler: Closes mobile menu (set state to false)
  const closeNavHander = () => { setShowNav(false); };

  return (
    <div>
      {/* Desktop Navigation - Always shown, hidden on mobile via CSS */}
      <Nav openNav={openNavHander} />
      
      {/* Mobile Navigation - Shows/hides based on state */}
      <MobileNav showNav={showNav} closeNav={closeNavHander} />
    </div>
  );
};

export default ResponsiveNav;
