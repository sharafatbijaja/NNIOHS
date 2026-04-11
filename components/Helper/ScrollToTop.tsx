/**
 * ScrollToTop Component
 * 
 * A floating button that appears when user scrolls down the page.
 * Clicking it smoothly scrolls back to the top of the page.
 * 
 * Features:
 * - Only visible after scrolling 300px down
 * - Smooth scroll animation
 * - Fixed position (stays visible while scrolling)
 * - Pulse animation effect
 * - Mobile responsive
 * 
 * Performance:
 * - Uses useEffect to manage scroll listeners
 * - Cleans up event listeners on unmount (prevents memory leaks)
 */

"use client"; // Required for client-side interactivity
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button"; // UI component from shadcn
import { ArrowUp } from "lucide-react"; // Icon library

const ScrollToTop = () => {
  // State: Controls visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Effect: Detect scroll position and show/hide button
  useEffect(() => {
    // Function that runs on every scroll event
    const toggleVisibility = () => {
      // Show button when scrolled down more than 300px
      if (window.scrollY > 300) setIsVisible(true);
      // Hide button when at top
      else setIsVisible(false);
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup: Remove event listener when component unmounts
    // This prevents memory leaks from multiple listeners
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []); // Empty dependency array = runs once on mount

  // Function: Scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to position 0 (top)
      behavior: "smooth", // Smooth animation instead of instant
    });
  };

  // Render: Only show button if isVisible is true
  return (
    <div className="fixed bottom-4 right-4 animate-pulse z-50">
      {/* Conditional rendering: Only show button when scrolled down */}
      {isVisible && (
        <Button
          onClick={scrollToTop} // Trigger smooth scroll on click
          className="bg-linear-to-br from-primary to-primary/90 text-white p-2 rounded-full cursor-pointer w-10 h-10 flex items-center justify-center focus:outline-none shadow-xl"
          aria-label="Scroll to top" // Accessibility label
        >
          <ArrowUp className="w-6 h-6" /> {/* Up arrow icon */}
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
