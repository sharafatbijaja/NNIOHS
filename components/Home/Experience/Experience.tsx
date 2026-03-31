import SectionHeading from "@/components/Helper/SectionHeading";
import { experiences } from "@/data";
import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        title1="Institute"
        title2="History"
        description="Explore our journey and achievements"
      />
      <div className="relative px-6 max-w-4xl mx-auto">
        {/* Timeline v-Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-br from-green-500 to-green-900 md:-translate-x-px"></div>
        {experiences.map((item, index) => {
          return (
            <div
              key={index}
              className={`realtive flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline Node */}
              <div className="absolute left md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-green-500 flex items-center justify-center z-10">
                {item.type === "work" ? (
                  <Briefcase className="w-4 h-4 text-green-500" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-green-500" />
                )}
              </div>

              {/* Content */}
              <div data-aos="zoom-in-down" className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                    <span className="px-3 py-1 rounded-full bg-green-600/10 font-medium">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => {
                      return (
                        <span key={tech} className="text-xs px-2 py-1 rounded-md bg-green-900 text-white">
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
