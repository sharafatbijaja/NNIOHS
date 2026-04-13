"use client";
/**
 * MobileNav Component
 *
 * Mobile hamburger menu navigation
 * Shows/hides based on state from ResponsiveNav
 *
 * Features:
 * - Slide-in overlay animation
 * - Navigation links with expandable dropdowns
 * - Close button (X icon)
 * - Semi-transparent dark background
 * - Keyboard accessible
 * - Active route highlighting
 *
 * Props:
 * - showNav: Boolean to show/hide menu
 * - closeNav: Callback function to close menu
 */

import { X, ChevronDown, ChevronRight } from 'lucide-react'; // Icons
import { NavLinks } from '@/Constant/ConstantsNNIOHS'; // Navigation links array
import Link from 'next/link'; // Next.js link component
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

// Type definition for mobile nav props
type props = {
  showNav: boolean; // Whether to show the menu
  closeNav: () => void; // Function to close menu
};

const MobileNav = ({ showNav, closeNav }: props) => {
  const pathname = usePathname();
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  
  // Conditional class: translate menu in/out based on showNav
  // translate-x-0 = visible (0px from left)
  // -translate-x-full = hidden (move left by 100%)
  const sidebarOpenClose = showNav ? 'translate-x-0' : '-translate-x-full';

  const handleDropdownToggle = (e: React.MouseEvent, name: string) => {
    e.stopPropagation(); // Prevent event from bubbling to overlay
    setExpandedDropdown(expandedDropdown === name ? null : name);
  };

  return (
    <div>
      {/* Background Overlay - Semi-transparent black */}
      <div
        className={`fixed ${sidebarOpenClose} inset-0 transform transition-all duration-300 z-[1002] bg-black/95 w-full h-screen`}
        onClick={closeNav} // Close menu when clicking overlay
        role="presentation" // Not a semantic element, just visual
      >
        {/* Mobile Menu Sidebar */}
        <nav
          className={`text-white ${sidebarOpenClose} fixed left-0 top-0 flex flex-col h-full transform transition-all duration-300 delay-50 w-[80%] sm:w-[60%] bg-gray-950 space-y-1 z-[1050] overflow-y-auto`}
          aria-label="Mobile navigation" // Accessibility label
        >
          {/* Navigation Links - Map through NavLinks array */}
          {NavLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const isExpanded = expandedDropdown === link.name;
            const hasDropdown = link.dropdown && link.dropdown.length > 0;

            // Skip Services link in mobile menu
            if (link.name === "Services") {
              return null;
            }

            if (hasDropdown) {
              return (
                <div key={index} className="border-b border-gray-800">
                  {/* Dropdown Toggle Button */}
                  <button
                    onClick={(e) => handleDropdownToggle(e, link.name)}
                    className={`w-full text-left text-[20px] sm:text-[26px] py-4 px-6 flex items-center justify-between transition-colors ${
                      isActive ? 'text-primary' : 'text-white hover:text-primary'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>

                  {/* Dropdown Items */}
                  {isExpanded && (
                    <div className="bg-gray-900/50">
                      {link.dropdown.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subLink.href}
                          onClick={closeNav}
                          className={`block text-[16px] sm:text-[20px] py-3 px-10 transition-colors border-b border-gray-800/50 ${
                            pathname === subLink.href
                              ? 'text-primary bg-primary/10'
                              : 'text-gray-300 hover:text-primary hover:bg-gray-800/50'
                          }`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={link.href}
                onClick={closeNav}
                className={`block text-[20px] sm:text-[26px] py-4 px-6 border-b border-gray-800 transition-colors ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-white hover:text-primary hover:bg-gray-800/50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Close Button - X icon in top-right */}
          <X
            onClick={closeNav}
            className='absolute top-4 right-4 sm:w-8 sm:h-8 h-6 cursor-pointer hover:text-primary transition-colors z-10'
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && closeNav()} // Keyboard accessible
            aria-label="Close menu"
          />
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
