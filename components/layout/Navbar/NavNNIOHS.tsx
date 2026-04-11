"use client";
import { NavLinks } from "@/Constant/ConstantsNNIOHS";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { Handshake, MenuIcon } from "lucide-react";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import Logo from "@/components/Helper/Logo";

type props = {
  openNav: () => void;
};

const Nav = ({ openNav }: props) => {
  const pathname = usePathname();
  const [navBg, setNavBg] = React.useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 80) {
        setNavBg(true);
      }
      if (window.scrollY < 80) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 py-2 bg-transparent dark:bg-transparent backdrop-blur-xl border-b border-white/50 dark:border-slate-900/50 ${navBg ? "shadow-sm " : "shadow-none"}`}
      aria-label="Main navigation"
    >
      <div className="flex justify-between ms-auto items-center h-full w-full px-4 lg:px-20">
        <Logo />
  

        {/* Desktop Navigation Links - Hidden on mobile, visible on lg+ screens */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={index}
                href={link.href}
                className={`font-semibold transition-all ${
                  isActive
                    ? "text-primary"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Section: Theme Toggle + CTA Button + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode / Light Mode Toggle */}
          <ThemeToggler />

          {/* "Get in touch" Call-to-Action Button */}
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all"
            aria-label="Get in touch button"
          >
            <span className="relative z-20 flex space-x-2 text-sm font-semibold">
              <span>Contact</span>
              <Handshake className="w-5 h-5" />
            </span>
          </Link>

          {/* Hamburger Menu Icon - Visible only on mobile (lg:hidden) */}
          <MenuIcon
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
            role="button"
            tabIndex={0}
            aria-label="Open mobile menu"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
