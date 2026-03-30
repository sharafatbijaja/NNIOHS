"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-2 rounded-full cursor-pointer w-12 h-12 flex items-center justify-center focus:outline-none"
        >
         
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
 
};

export default ScrollToTop;
