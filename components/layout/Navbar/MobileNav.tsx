"use client";
/**
 * MobileNav Component
 *
 * Mobile hamburger menu navigation
 * Shows/hides based on state from ResponsiveNav
 *
 * Features:
 * - Slide-in overlay animation
 * - Navigation links
 * - Close button (X icon)
 * - Semi-transparent dark background
 * - Keyboard accessible
 * - Active route highlighting
 * - Services dropdown with expandable menu
 *
 * Props:
 * - showNav: Boolean to show/hide menu
 * - closeNav: Callback function to close menu
 */

import { X, ChevronDown, ChevronRight } from 'lucide-react'; // Icons
import { NavLinks, Services } from '@/Constant/Constant'; // Navigation links array
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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  // Conditional class: translate menu in/out based on showNav
  // translate-x-0 = visible (0px from left)
  // -translate-x-full = hidden (move left by 100%)
  const sidebarOpenClose = showNav ? 'translate-x-0' : '-translate-x-full';

  const isServicesActive = pathname.startsWith("/services");

  return (
    <div>
      {/* Background Overlay - Semi-transparent black */}
      <div
        className={`fixed ${sidebarOpenClose} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-95 w-full h-screen`}
        onClick={closeNav} // Close menu when clicking overlay
        role="presentation" // Not a semantic element, just visual
      >
        {/* Mobile Menu Sidebar */}
        <nav
          className={`text-white ${sidebarOpenClose} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gray-950 space-y-6 z-1050`}
          aria-label="Mobile navigation" // Accessibility label
        >
          {/* Navigation Links - Map through NavLinks array */}
          {NavLinks.map((link, index) => {
            const isActive = pathname === link.href;
            
            if (link.name === "Services") {
              return (
                <div key={index} className="ml-12">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center space-x-2 text-[22px] sm:text-[30px] border-b pb-1 cursor-pointer transition-colors ${
                      isServicesActive ? 'text-primary border-primary' : 'border-primary/50 hover:text-primary'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isServicesOpen ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                  
                  {/* Services Dropdown */}
                  {isServicesOpen && (
                    <div className="mt-4 space-y-3 ml-4">
                      {Services.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          onClick={closeNav}
                          className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
                        >
                          <span className="text-lg">{service.icon}</span>
                          <span className="text-lg">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={index} href={link.href} onClick={closeNav}>
                {/* Link text with bottom border */}
                <p className={`text-white w-fit text-[22px] ml-12 border-b pb-1 sm:text-[30px] cursor-pointer transition-colors ${
                  isActive ? 'text-primary border-primary' : 'border-primary/50 hover:text-primary'
                }`}>
                  {link.name}
                </p>
              </Link>
            );
          })}

          {/* Close Button - X icon in top-right */}
          <X
            onClick={closeNav}
            className='absolute top-7 right-7 sm:w-8 sm:h-8 h-6 cursor-pointer hover:text-primary transition-colors'
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
