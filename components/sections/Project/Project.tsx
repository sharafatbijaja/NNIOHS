/**
 * Project/Portfolio Section Component
 * 
 * Showcases featured projects and work examples
 * Builds credibility by showing real work samples
 * 
 * Layout:
 * - Responsive grid: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
 * - Cards are reusable ProjectCard components
 * - Each project contains image, title, description, tech stack, and link
 * 
 * SEO Benefits:
 * - Semantic section structure
 * - Proper heading hierarchy
 * - Project cards help with keyword optimization
 * 
 * Data Source:
 * - Projects array comes from data.ts
 * - Contains all project details
 */

import SectionHeading from "@/components/common/SectionHeading"; // Reusable section heading
import ProjectCard from "./ProjectCard"; // Individual project card component
import React from "react";
import { projects } from "@/data"; // Projects data array

const Project = () => {
  return (
    // Main projects section with anchor ID
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800"
      aria-label="Projects section"
    >
      {/* Section Title */}
      <SectionHeading
        title1="Featured"
        title2="Projects"
        description="Check out some of my latest projects"
      />

      {/* Projects Grid Container */}
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-[80%] mx-auto mt-8">
        {/* Loop through all projects from data.ts */}
        {projects.map((project, index) => {
          return (
            // Semantic article wrapper for each project
            <article key={index}>
              {/* Project Card: Displays image, title, description, tech stack, and links */}
              <ProjectCard {...project} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
