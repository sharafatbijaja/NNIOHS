import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sharafat Bijaja",
  description: "Web Developer, UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning>

      <body className={`${font.className} h-full antialiased`}>
        <Provider> 
        
          <ResponsiveNav />
        
          {children}  
          <ScrollToTop />
        

        </Provider>
        </body>
    </html>
  );
}
