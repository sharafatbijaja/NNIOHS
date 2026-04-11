/**
 * Experience/Education Timeline Component
 *
 * Displays professional experience and education history
 * Creates a visual timeline showing career progression
 *
 * Features:
 * - Vertical timeline with animated line
 * - Timeline nodes (icons change based on work/education)
 * - Alternating layout: left/right on desktop for visual interest
 * - Mobile responsive: single column with left alignment
 * - Hover effects for interactivity
 *
 * Timeline Structure:
 * - Central vertical line
 * - Circular nodes with icons
 * - Cards with job/education details
 * - Tech tags showing relevant skills
 *
 * Animation:
 * - Cards zoom-in + fade when entering viewport
 * - Smooth transitions on hover
 *
 * SEO Benefits:
 * - Rich semantic structure
 * - Organized timeline helps search engines understand career progression
 * - Proper heading hierarchy
 */

import SectionHeading from "@/components/common/SectionHeading"; // Section title component
import { experiences } from "@/data"; // Experience data array
import { Briefcase, GraduationCap } from "lucide-react"; // Icons: briefcase for work, graduation cap for education
import React from "react";
import { motion } from "framer-motion"; // Animation library

const Experience = () => {
  return (
    // Main experience section
    <section
      id="experience"
      className="py-20 bg-gray-0 dark:bg-transparent"
      aria-label="Experience and education section"
    >
      {/* Section Title */}
      {/* <SectionHeading
        title1="Experience"
        title2="Education"
        description="Explore my professional journey"
      /> */}
      <SectionHeading
        title1="Institute "
        title2="History"
        description="Explore our journey and achievements"
      />

      {/* Timeline Container */}
      <div className="relative px-6 max-w-4xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-radial from-primary to-slate-900 md:-translate-x-px"></div>

        {/* Loop through experiences (jobs and education) */}
        {experiences.map((item, index) => {
          return (
            // Experience item wrapper
            <article
              key={index}
              // Alternating layout: even items left, odd items right
              className={`realtive flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node - Colored circle with icon */}
              <div className="absolute left md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-primary flex items-center justify-center z-10">
                {/* Show briefcase icon for work, graduation cap for education */}
                {item.type === "work" ? (
                  <Briefcase className="w-4 h-4 text-primary" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-primary" />
                )}
              </div>

              {/* Experience Card Content */}
              <motion.div
                // Animation: Zoom in + fade when entering viewport
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]"
              >
                {/* Card background */}
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  {/* Period/Date badge */}
                  <div className="flex items-center gap-2 text-sm text-primary mb-2">
                    <span className="px-3 py-1 rounded-full font-medium mb-3 bg-gray-400/20 border border-primary/20">
                      {item.period}
                    </span>
                  </div>

                  {/* Job/Education Title */}
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>

                  {/* Company/School Name */}
                  <p className="text-muted-foreground text-sm mb-5">
                    {item.company}
                  </p>

                  {/* Description of role/course */}
                  <p className="text-muted-foreground text-sm mb-5">
                    {item.description}
                  </p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => {
                      return (
                        // Colored badge for each technology
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/15 text-primary font-medium">
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
