"use client";

import { courses } from "@/data/coursesData";
import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { ArrowRight, Clock, DollarSign, GraduationCap } from "lucide-react";

const CoursesPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Our Courses"
        subtitle="Explore"
        description="Discover Our Comprehensive Nursing Programs"
      />

      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Link
                key={course.id}
                href={course.href}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/10">
                    <Icon className="w-8 h-8" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {course.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {course.description}
                </p>

                {/* Course Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Duration:</span> {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Eligibility:</span> {course.eligibility}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Fees:</span> {course.fees}
                    </span>
                  </div>
                </div>
                
                {/* Features Tags */}
                <div className="flex flex-wrap gap-2">
                  {course.features.map((feature, index) => (
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
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Need Help Choosing the Right Course?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Our admission counselors are here to help you find the perfect nursing program for your career goals.
        </p>
        <Link
          href="/admissions"
          className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold"
        >
          Apply Now
        </Link>
      </div>
    </PageWrapper>
  );
};

export default CoursesPage;
