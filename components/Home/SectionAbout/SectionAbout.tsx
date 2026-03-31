import { stats } from "@/data";
import { highlights } from "@/data";
import Image from "next/image";
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";

const SectionAbout = () => {
  return (
    <div className=" bg-white dark:bg-gray-900 pt-15 pb-30">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <SectionHeading
          title1="About"
          title2="NNIOHS"
          description="Naz Nursing Institute of Health Sciences, established in 2017 by Waseem Welfare Trust, is a premier nursing education institution in Karachi."
        />
      </div>

      <div data-aos="fade-right" data-aos-delay="800" className="grid mx-auto lg:grid-cols-2 gap-12 items-center container px-4">
        {/* Image */}
        <div>
          <Image 
            src="/images/p1.jpg"
            alt="About Us"
            width={700}
            height={500}
            className="rounded-lg shadow-lg "
          />
        </div>

        {/* Text Content */}
        <div>
          <h3 className="text-3xl font-semibold mb-4">
            Premier Nursing Education Institution
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 pt-6">
            Naz Nursing Institute of Health Sciences, established in 2017 by Waseem Welfare Trust, is a premier nursing education institution in Karachi. As a project of Naz General Hospital, we are committed to producing highly skilled, ethical, and compassionate nursing professionals who serve the healthcare needs of Pakistan and beyond.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Our institute is fully recognized by Pakistan Nursing & Midwifery Council (PNMC) and affiliated with Dow University of Health Sciences (DUHS) and Sindh Nursing Examination Board.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
            {highlights.map((item) => (
              <div key={item.text} className="flex items-center text-sm">
                <div className="w-8 h-8 text-green-500/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="mt-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            return (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
