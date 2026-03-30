import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
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
    <div className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-lg dark:hover:bg-gray-700 transition-colors duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className={"w-full h-full object-cover"}
        />
      </div>
      {/* main content */}
      <div className="p-4">
        <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-800 transition-colors duration-300 cursor-pointer">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2 py-5">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex gap-3">
          <Button asChild size={"sm"} className="flex-1">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
          <Button asChild size={"sm"} variant={"outline"} className="flex-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
