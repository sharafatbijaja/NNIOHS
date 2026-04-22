"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartPulse, Clock, BookOpen, Briefcase, CheckCircle, ArrowRight, Send } from "lucide-react";

const OneYearAidNursePage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="One Year Aid Nurse Certificate"
        subtitle="Nursing Assistant Program"
        description="Specialized 1-year program for aspiring nursing assistants and healthcare support professionals"
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto space-y-12">
        {/* Program Introduction */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="inline-flex h-16 w-16 items-center justify-center text-primary">
              <HeartPulse className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Program Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The One Year Aid Nurse Certificate program is a specialized course designed to prepare students for nursing assistant roles. This program focuses on patient care fundamentals, emergency medical response, and practical clinical skills essential for supporting registered nurses and healthcare teams.
              </p>
            </div>
          </div>
        </div>

        {/* Duration & Certificate */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Duration & Certificate</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Program Duration</h3>
              <p className="text-3xl font-bold text-primary mb-2">1 Year</p>
              <p className="text-gray-600 dark:text-gray-400">2 Semesters</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Certificate Awarded</h3>
              <p className="text-3xl font-bold text-primary mb-2">Aid Nurse Certificate</p>
              <p className="text-gray-600 dark:text-gray-400">Nursing Assistant Professional</p>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <HeartPulse className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Academic Qualification</h4>
                  <p className="text-gray-600 dark:text-gray-400">Matriculation with Science</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Minimum Marks</h4>
                  <p className="text-gray-600 dark:text-gray-400">40% in Matric</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Age Requirement</h4>
                  <p className="text-gray-600 dark:text-gray-400">16-30 years</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Medical Fitness</h4>
                  <p className="text-gray-600 dark:text-gray-400">Required</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Outline (Semester-wise) */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Curriculum Outline (Semester-wise)</h2>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">Semester 1</span>
                Nursing Fundamentals
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {["Introduction to Nursing", "Basic Patient Care", "Medical Terminology", "Body Mechanics & Positioning", "Vital Signs Assessment", "Infection Prevention", "Patient Hygiene", "Communication in Healthcare"].map((subject, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">Semester 2</span>
                Advanced Nursing Skills
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {["Advanced Patient Care", "Emergency Response", "Wound Care & Dressing", "Medication Safety", "Feeding & Nutrition", "Patient Mobility", "Clinical Practicum", "Final Assessment"].map((subject, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Career Opportunities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Nursing Assistant",
              "Patient Care Technician",
              "Home Health Aide",
              "Hospital Ward Assistant",
              "ICU Support Staff",
              "Emergency Room Assistant",
              "Rehabilitation Assistant",
              "Long-term Care Aide",
              "Clinic Nursing Assistant",
              "Pediatric Care Assistant",
              "Geriatric Care Provider",
              "Further Nursing Education"
            ].map((career, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{career}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/apply-now">
            <Button size="lg" className="w-full sm:w-auto">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Contact Us
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default OneYearAidNursePage;
