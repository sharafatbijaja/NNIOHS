import React from "react";
import { footerSocialLinks } from "@/data";
import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 py-12">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="text-xl font-bold text-blue-600">
            {"Naz Nursing Institute"}
          </a>
          <div className="flex items-center gap-4">
            {footerSocialLinks.map((link, index) => {
              return (
                <a
                  key={`${link.label}-${index}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 text-gray-600 dark:text-gray-400 dark:hover:text-gray-100 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-shadow-muted-foreground hover:text-blue-600 transition-colors duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1 ">
             A Project of Naz General Hospital & Waseem Welfare Trust
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-800 text-center">
            <p className="text-sm text-muted-foreground"> &copy; 2026 Naz Nursing Institute of Health Sciences | All Rights Reserved</p>
            <p className="text-sm text-muted-foreground mt-2">Affiliated with Dow University of Health Sciences (DUHS)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
