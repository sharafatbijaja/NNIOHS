import React from "react";
import { footerSocialLinks } from "@/data";
import Logo from "@/components/Helper/Logo";
import { Link as LinkIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 py-12" role="contentinfo">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <Logo href="/" external />

          <nav className="flex items-center gap-4" aria-label="Social links">
            {footerSocialLinks.map((link) => {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 text-gray-600 dark:text-gray-400 dark:hover:text-gray-100 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-shadow-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              );
            })}
          </nav>
          <p className="text-sm text-muted-foreground flex items-center gap-1 ">
            <a href="https://bijaja.com.pk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors duration-300">
              Developed by {''} <LinkIcon className='w-4 h-4 text-destructive fill-destructive' /> Bilal
            </a>
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
          {/* <p className="text-sm text-muted-foreground"> &copy; 2026 Bijaja. All rights reserved.</p> */}
          <p className="text-sm text-muted-foreground"> &copy; 2026 Ikhlas Institute of Nursing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
