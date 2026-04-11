import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/layout/Navbar/ResponsiveNav";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import Footer from "@/components/layout/Footer/Footer";

// Configure Google Font (Inter) with all weights for typography flexibility
const font = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // CSS variable for Tailwind
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// SEO Metadata - Critical for search engine optimization
export const metadata: Metadata = {
  // title: "Sharafat Bijaja", 
  title: "Naz Nursing Institute Karachi", // Page title for browser tab and search results
  description: "Web Developer, UI/UX Designer", // Meta description for search results
};

// Root Layout Component - Wrapper for entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HTML element with scroll-smooth for smooth anchor link transitions
    <html
      lang="en" // Language declaration for accessibility & SEO
      suppressHydrationWarning // Required for dark mode theme support
      className="scroll-smooth" // Smooth scrolling behavior for anchor links
    >
      {/* Body with Inter font and antialiasing for better text rendering */}
      <body className={`${font.className} h-full antialiased`}>
        {/* Provider - Wraps app with theme/state context */}
        <Provider>
          {/* Navigation Header - Sticky positioning keeps it visible on scroll */}
          <header className="sticky top-0 z-40">
            {/* Responsive Navigation Component */}
            <ResponsiveNav />
          </header>
        
          {/* Main Content Area - All page content renders here */}
          <main>
            {children}
          </main>

          {/* Scroll-to-Top Button - Floating button for easy navigation */}
          <ScrollToTop />

          {/* Footer Section - Contact info and links */}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
