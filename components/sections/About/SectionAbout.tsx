/**
 * SectionAbout Component
 *
 * Tells the story about the developer/person
 * Builds trust and credibility with potential clients/employers
 *
 * Layout:
 * - Image on left (responsive: stacks on mobile)
 * - Text and highlights on right
 * - Statistics at bottom (years, projects, clients, etc)
 *
 * Animation:
 * - Slide in from left with fade effect when in viewport
 * - Uses Framer Motion for smooth transitions
 *
 * SEO Benefits:
 * - Semantic HTML (section, article, h3 tags)
 * - Proper heading hierarchy
 * - Accessibility labels
 */

import { stats } from "@/data"; // Statistics data (8+ years, X projects, etc)
import { highlights } from "@/data"; // Key highlights with icons
import Image from "next/image"; // Next.js optimized image component
import SectionHeading from "@/components/common/SectionHeading"; // Reusable section heading
import React from "react";
import { motion } from "framer-motion"; // Animation library
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronRightCircleIcon } from "lucide-react"; // Icon for "Read more" button

const SectionAbout = () => {
  return (
    // Main section with ID for anchor links and aria-label for accessibility
    <section
      id="about"
      className="bg-white dark:bg-transparent"
      aria-label="About section"
    >
      {/* Container with heading */}
      <div className="container mx-auto px-4">
        {/* Section title - "About Me" */}
        <SectionHeading
          title1="About"
          title2="NNIOHS"
          description="The premier nursing education institution since 2017 in Karachi"
        />
      </div>

      {/* Main content with animation */}
      <motion.article
        // Animation states
        initial={{ opacity: 0, x: -50 }} // Start: invisible, shifted left
        whileInView={{ opacity: 1, x: 0 }} // When in view: visible, normal position
        transition={{ duration: 0.8, delay: 0.2 }} // 0.8s animation with 0.2s delay
        viewport={{ once: true, margin: "-100px" }} // Only animate once, trigger 100px before entering viewport
        className="grid mx-auto lg:grid-cols-2 gap-12 items-center container px-4"
      >
        {/* Left side: Profile image */}
        <div>
          {/* Next.js Image component: optimizes images automatically */}
          <Image
            src="/images/about-us2.jpg" // Image path from public folder
            alt="About Us" // Alt text for SEO and accessibility
            width={700} // Image width
            height={500} // Image height
            className="rounded-lg shadow-lg w-full" // Styling: rounded corners + shadow
          />
        </div>

        {/* Right side: Text content */}
        <div>
          {/* Main heading */}
          <h3 className="text-2xl font-semibold mb-4">
            {/* WordPress developer, SEO specialist and digital growth partner */}
            Premier Nursing Education Institution
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-6 pt-6">
            {/* I deliver responsive custom WordPress, Shopify, ECWID, and HTML5 websites with clear UX, fast performance and strong SEO foundations. */}
            Naz Nursing Institute of Health Sciences, established in 2017 by
            Waseem Welfare Trust, is a premier nursing education institution in
            Karachi. As a project of Naz General Hospital, we are producing highly skilled, ethical, and nursing
            professionals for Pakistan and others.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {/* From server hosting, WHM/cPanel and deployment to AI-assisted content and paid campaign optimization, I help brands launch faster and convert better. */}
            Our institute is fully recognized by Pakistan Nursing & Midwifery
            Council (PNMC) and affiliated with Dow University of Health Sciences
            (DUHS) and Sindh Nursing Examination Board.
          </p>

          {/* Highlights grid: Key points with icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
            {/* Map through highlights array from data.ts */}
            {highlights.map((item) => (
              <div key={item.text} className="flex items-center text-sm">
                {/* Icon container */}
                <div className="w-8 h-8 text-primary flex items-center justify-center bg-primary/10 rounded-full mr-3">
                  {/* Dynamic icon based on data */}
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                {/* Highlight text */}
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
          <Button size={'lg'} variant={'link'} className="mt-10 text-lg cursor-pointer">
           
            Read more
            <ChevronRight className="ml-2 w-5 h-5 -mb-05" />
            </Button>
        </div>
      </motion.article>



      

      {/* Statistics section: Shows credibility metrics */}
      <div className="max-w-250 mt-16 mx-auto">
        {/* Grid layout: 2 columns on mobile, 4 on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Map through stats array */}
          {stats.map((stat) => {
            return (
              <article
                key={stat.label}
                className="text-center"
              >
                {/* Big number (8+, 50+, etc) */}
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                {/* Label (Years, Projects, Clients) */}
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
