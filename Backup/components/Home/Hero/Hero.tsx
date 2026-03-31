"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, FolderOpen } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="mt-16 w-full h-190 flex items-center justify-center text-4xl font-bold
              text-gray-800 dark:text-gray-100
              bg-linear-to-br 
              from-blue-50 via-purple-100 to-white
              dark:from-gray-800 dark:via-blue-950 dark:to-gray-900"
    >
      {/* Hero Content */}

      <div className="relative z-10 text-center">
        <div data-aos="fade-up" className="ms:mb-6">
          {/* <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-sm text-muted-foreground dark:text-gray-200 mb-8'>
          <span className='w-2 h-2 rounded-full bg-green-600'></span>
          Available for opportunities
        </span> */}

          <span data-aos="zoom-out-up" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-600"></span>
            Admissions Open for 2026
          </span>

          {/* Title */}
          {/* <h1 className='text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6'>
          Hi, I'm <span className='text-blue-600 dark:text-blue-400 text-nowrap'>Sharafat Ali</span>
          </h1>
 <div className='text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-bold mb-4 ms:mb-8 h-12'>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'next-js, React, Tailwind CSS',
                2000,
                'Passionate about Building Web Experiences',
                2000,
                'Open to New Opportunities',
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div> */}

          <h1 data-aos="fade-down" data-aos-delay="100" className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-6">
            Welcome to Naz Nursing Institute{" "}
            <span className="text-blue-600 dark:text-blue-400">
              of Health Sciences
            </span>
          </h1>

          {/* TypeWriting Effects */}
          <div data-aos="fade-up" data-aos-delay="200" className="pt-5 text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-4 ms:mb-8 h-12">
            <TypeAnimation
              sequence={[
                "Shaping Compassionate Nurses",
                2000,
                "Excellence in Healthcare",
                2000,
                "Since 2017",
                2000,
                "DUHS Affiliated",
                2000,
                "Future Healthcare Leaders",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>

          {/* Paragraph and Buttons */}
          <p className="pt-8 text-sm text-gray-600 dark:text-gray-300 mb-8">
            A Project of Naz General Hospital | Affiliated with Dow University of Health Sciences (DUHS)
            <br />
            Generic BS Nursing (4 Years) & CNA (2 Years) Programs
          </p>

          <div data-aos="fade-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine" data-aos-delay="1000" className="flex sm:flex-row gap-4 justify-center">
            <Button size={"lg"} asChild className="w-fit ">
              <a href="">
                <FolderOpen className="w-5 h-5 mr-2" />
                Apply Now (Admission 2026)
              </a>
            </Button>
            <Button variant={"link"} size={"lg"} asChild className="w-fit">
              <a href="">
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore Programs
              </a>
            </Button>
          </div>
        </div>
        
        {/* Tagline below */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 dark:text-gray-300 italic">
            "Excellence in Nursing Education | Hands-on Training at Dr. Ruth K.M. Pfau Civil Hospital Karachi"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
