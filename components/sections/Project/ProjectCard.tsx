/**
 * ProjectCard Component
 * 
 * Individual project/portfolio item card
 * Displayed in a responsive grid in Project section
 * 
 * Features:
 * - Project thumbnail image
 * - Title and description
 * - Tech stack tags
 * - Links (Live demo + GitHub)
 * - Hover effects for interactivity
 * 
 * Props:
 * - title: Project name
 * - description: Brief description
 * - image: Thumbnail URL
 * - techStack: Array of technologies used
 * - demoUrl: Link to live demo
 * - githubUrl: Link to GitHub repo
 */

import React from "react";
import Image from "next/image"; // Next.js optimized images
import { Button } from "@/components/ui/button"; // shadcn button component
import { ExternalLink } from "lucide-react"; // External link icon

// Type definition for project props
type Props = {
  title: string; // Project name
  description: string; // Project description
  image: string; // Project thumbnail image URL
  techStack: string[]; // Array of technologies used
  demoUrl: string; // Live demo link
  githubUrl: string; // GitHub repository link
};

const ProjectCard = ({
  description,
  image,
  title,
  techStack,
  demoUrl,
  githubUrl,
}: Props) => {
  return (
    // Card container with hover effects
    <div className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-lg dark:hover:bg-gray-700 transition-colors duration-300">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        {/* Project thumbnail image */}
        <Image
          src={image}
          alt={title} // Important for SEO and accessibility
          width={400}
          height={400}
          className="w-full h-full object-cover" // Cover entire space
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Project Title */}
        <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-800 transition-colors duration-300 cursor-pointer">
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-400">{description}</p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 py-5">
          {/* Map through technologies and create tags */}
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - Demo and GitHub links */}
        <div className="flex gap-3 pt-4">
          {/* Demo Link Button */}
          <Button asChild className="flex-1 gap-2" size="sm">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>

          {/* GitHub Link Button */}
          <Button
            asChild
            variant="outline"
            className="flex-1"
            size="sm"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
