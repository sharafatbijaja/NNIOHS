"use client";
import { NavLinks, Services } from "@/Constant/Constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Logo from "@/components/Helper/Logo";
import { Handshake, MenuIcon, ChevronDown } from "lucide-react";
import ThemeToggler from "@/components/Helper/ThemeToggler";

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

  const isServicesActive = pathname.startsWith("/services");

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 py-2 bg-white/50 dark:bg-slate-950/75 backdrop-blur-xl border-b border-white/10 dark:border-slate-900/50 ${navBg ? "shadow-md" : "shadow-none"}`}
      aria-label="Main navigation"
    >
      <div className="flex justify-between ms-auto items-center h-full w-full px-4 lg:px-20">
        <Logo />

        {/* Desktop Navigation Links - Hidden on mobile, visible on lg+ screens */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link, index) => {
            const isActive = pathname === link.href;
            
            if (link.name === "Services") {
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  <button
                    className={`font-semibold transition-all flex items-center space-x-1 ${
                      isServicesActive
                        ? "text-primary"
                        : "text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Mega Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-300 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 p-8 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="grid grid-cols-3 gap-8">
                      {/* Column 1: Development */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                          Development
                        </h4>
                        <div className="space-y-3">
                          {Services.slice(0, 3).map((service) => (
                            <Link
                              key={service.id}
                              href={service.href}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group/link"
                            >
                              <span className="text-2xl">{service.icon}</span>
                              <div>
                                <div className={`text-sm font-semibold ${
                                  pathname === service.href
                                    ? "text-primary"
                                    : "text-gray-900 dark:text-white group-hover/link:text-primary transition-colors"
                                }`}>
                                  {service.name}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Design & Marketing */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                          Design & Marketing
                        </h4>
                        <div className="space-y-3">
                          {Services.slice(3, 5).map((service) => (
                            <Link
                              key={service.id}
                              href={service.href}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group/link"
                            >
                              <span className="text-2xl">{service.icon}</span>
                              <div>
                                <div className={`text-sm font-semibold ${
                                  pathname === service.href
                                    ? "text-primary"
                                    : "text-gray-900 dark:text-white group-hover/link:text-primary transition-colors"
                                }`}>
                                  {service.name}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 3: Featured */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                          Featured
                        </h4>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl p-4 border border-primary/20">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Need Custom Solutions?
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                            We can tailor our services to meet your specific requirements.
                          </p>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                          >
                            Get a Quote
                          </Link>
                        </div>
                        <div className="mt-4 space-y-2">
                          {Services.slice(5, 6).map((service) => (
                            <Link
                              key={service.id}
                              href={service.href}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group/link"
                            >
                              <span className="text-2xl">{service.icon}</span>
                              <div>
                                <div className={`text-sm font-semibold ${
                                  pathname === service.href
                                    ? "text-primary"
                                    : "text-gray-900 dark:text-white group-hover/link:text-primary transition-colors"
                                }`}>
                                  {service.name}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                                  {service.description}
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
                        Explore all our services
                      </div>
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                      >
                        View All Services
                        <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

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
                <span>Contact</span><Handshake className="w-5 h-5" />
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
