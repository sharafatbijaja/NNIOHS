"use client";

import { programs } from "@/data/programsData";
import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { ArrowRight, Clock, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const ProgramsPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Academic Programs"
        subtitle="Explore"
        description="Discover Our Comprehensive Nursing Programs"
      />

      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Link
                key={program.id}
                href={program.href}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/10">
                    <Icon className="w-8 h-8" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {program.name}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Duration:</span> {program.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Eligibility:</span> {program.eligibility}
                    </span>
                  </div>
                </div>
                
                {/* Features Tags */}
                <div className="flex flex-wrap gap-2">
                  {program.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-700">
                  <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:underline">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-0">
        <div className="flex flex-col items-center max-w-4xl mx-auto p-10 text-center bg-linear-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Need Help Choosing the Right Program?
        </h2>


        

        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-150 py-5">
          Our admission counselors are here to help you find the perfect nursing program for your career goals.
        </p>
        <Link
          href="/admissions"
          className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold"
        >
          Apply Now
        </Link>
      </div>
      </section>
    </PageWrapper>
  );
};

export default ProgramsPage;
