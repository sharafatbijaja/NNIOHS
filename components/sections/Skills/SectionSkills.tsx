/**
 * SectionSkills Component
 *
 * Showcases technical skills and expertise
 * Organized by category (Frontend, Backend, Tools, etc)
 *
 * Features:
 * - Grouped skill categories
 * - Staggered animation for each skill card
 * - Responsive grid (2 → 6 columns depending on screen size)
 * - Icon badges for visual appeal
 *
 * Animation:
 * - Each skill animates in sequence with slight delay
 * - Triggers when section enters viewport
 *
 * SEO Benefits:
 * - Semantic section structure
 * - Clear hierarchy (h3 for categories)
 * - Descriptive meta text
 */

import React from "react";
import SectionHeading from "@/components/common/SectionHeading"; // Section title component
import { skillCategories } from "@/data"; // Skills array organized by category
import SkillCard from "./SkillCard"; // Individual skill card component
import { motion } from "framer-motion"; // Animation library

const SectionSkills = () => {
  return (
    // Main section with ID for anchor links
    <section
      id="skills"
      className="py-25 bg-gray-50 dark:bg-transparent"
      aria-label="Skills section"
    >
      {/* Section Heading */}
      {/* <SectionHeading
        title1="My"
        title2="Skills"
        description="HTML, CSS, WordPress, Shopify, AI tools and SEO workflows for fast, conversion-focused websites and digital campaigns."
      /> */}
      <SectionHeading
        title1="Our"
        title2="Programs"
        description="Naz Nursing Institute offers nursing education programs designed to shape compassionate healthcare professionals.
•"/>

      {/* Skills Grid Container */}
      <div className="space-y-12 container mx-auto">
        {/* Loop through skill categories */}
        {skillCategories.map((category) => {
          return (
            // Category container
            <article key={category.title}>
              {/* Category title with bullet point */}
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                {/* Colored bullet */}
                <span className="text-primary animate-pulse text-4xl">•</span>
                {/* Category name (Frontend, Backend, etc) */}
                {category.title}
              </h3>

              {/* Skills grid - Responsive columns */}
              {/* Mobile: 2, Tablet: 3, Desktop: 4, Large: 6 */}
              <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                {/* Loop through individual skills in category */}
                {category.skills.map((skill, index) => {
                  return (
                    // Animated wrapper for each skill
                    <motion.div
                      key={index}
                      // Animation: Fade in + slide up + slide left
                      initial={{ opacity: 0, y: -20, x: -20 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      // Stagger effect: each skill delays by 5ms * index
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      // Only animate once when entering viewport
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      {/* Skill card with icon and name */}
                      <SkillCard name={skill.name} icon={skill.icon} />
                    </motion.div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SectionSkills;
