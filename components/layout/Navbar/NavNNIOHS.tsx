"use client";
import { NavLinks } from "@/Constant/ConstantsNNIOHS";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Handshake, MenuIcon, ChevronDown } from "lucide-react";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import Logo from "@/components/Helper/Logo";

type props = {
  openNav: () => void;
};

const Nav = ({ openNav }: props) => {
  const pathname = usePathname();
  const [navBg, setNavBg] = React.useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = React.useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleDropdownMouseEnter = (name: string) => {
    setOpenDropdown(name);
  };

  const handleDropdownMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 py-2 bg-transparent dark:bg-transparent backdrop-blur-xl border-b border-white/50 dark:border-slate-900/50 ${navBg ? "shadow-sm " : "shadow-none"}`}
      aria-label="Main navigation"
    >
      <div className="flex justify-between ms-auto items-center h-full w-full px-4 lg:px-20">
        <Logo />

        {/* Desktop Navigation Links - Hidden on mobile, visible on lg+ screens */}
        <div className="hidden lg:flex items-center space-x-8">
          {NavLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const isDropdownOpen = openDropdown === link.name;
            const hasDropdown = link.dropdown && link.dropdown.length > 0;

            return (
              <div
                key={index}
                className="relative"
              >
                {hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(link.name)}
                    className={`font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                      isActive
                        ? "text-primary"
                        : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-semibold transition-all flex items-center gap-1 ${
                      isActive
                        ? "text-primary"
                        : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Mega Menu for Programs */}
                {link.name === "Programs" && link.dropdown && isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-150 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 p-8 z-50">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Column 1: Programs */}
                      <div>
                        <h4 className="pb-6 border-b border-gray-400 dark:border-slate-700 flex items-center justify-between text-sm font-bold text-gray-900 dark:text-primary mb-4 uppercase tracking-wider brightness-130">
                          Programs
                        </h4>
                        <div className="space-y-3">
                          {link.dropdown.slice(0, 3).map((subLink, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subLink.href}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group/link"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div>
                                <div className={`text-sm font-semibold ${
                                  pathname === subLink.href
                                    ? "text-primary"
                                    : "text-gray-900 dark:text-white group-hover/link:text-primary transition-colors"
                                }`}>
                                  {subLink.name}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Training & Faculty */}
                      <div>
                        <h4 className="pb-6 border-b border-gray-400 dark:border-slate-700 flex items-center justify-between text-sm font-bold text-gray-900 dark:text-primary mb-4 uppercase tracking-wider brightness-130">
                          Training & Faculty
                        </h4>
                        <div className="space-y-3">
                          {link.dropdown.slice(3).map((subLink, subIndex) => (
                            <Link
                              key={subIndex + 3}
                              href={subLink.href}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group/link"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div>
                                <div className={`text-sm font-semibold ${
                                  pathname === subLink.href
                                    ? "text-primary"
                                    : "text-gray-900 dark:text-white group-hover/link:text-primary transition-colors"
                                }`}>
                                  {subLink.name}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-700 flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Explore all academic programs
                      </div>
                      <Link
                        href="/programs"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                        onClick={() => setOpenDropdown(null)}
                      >
                        View All Programs
                        <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Simple Dropdown for other items */}
                {link.name !== "Programs" && link.dropdown && isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-5 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 p-2 z-50">
                    {link.dropdown.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subLink.href}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group/link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div>
                          <div className={`text-sm font-semibold ${
                            pathname === subLink.href
                              ? "text-primary"
                              : "text-gray-900 dark:text-white group-hover/link:text-primary transition-colors"
                          }`}>
                            {subLink.name}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
