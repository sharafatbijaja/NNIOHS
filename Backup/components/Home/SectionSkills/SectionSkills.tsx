import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { skillCategories } from "@/data";
import SkillCard from "./SkillCard";

const SectionSkills = () => {
  return (
    <div className="py-25 bg-gray-50/50 dark:bg-gray-950">
      {/* Section Heading */}
      <SectionHeading
        title1="Our"
        title2="Programs"
        description="Naz Nursing Institute offers comprehensive nursing education programs designed to shape compassionate healthcare professionals."
      />

      {/* Skills Grid */}
      <div className="space-y-12 w-[80%] mx-auto">
        {skillCategories.map((category) => {
          return (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-blue-500">•</span>
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => {
                  return (
                    <div 
                    data-aos="fade-down-right"
                    data-aos-delay={index * 100}
                    key={index}>
                      <SkillCard name={skill.name} icon={skill.icon} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionSkills;
