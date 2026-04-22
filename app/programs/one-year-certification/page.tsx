"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Clock, BookOpen, Briefcase, CheckCircle, ArrowRight, Send } from "lucide-react";

const OneYearCertificationPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="One Year Certification Course"
        subtitle="Paramedical Certification"
        description="Comprehensive 1-year paramedical certification program for healthcare support roles"
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto space-y-12">
        {/* Program Introduction */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="inline-flex h-16 w-16 items-center justify-center text-primary">
              <ClipboardCheck className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Program Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The One Year Certification Course is a comprehensive paramedical program designed to provide essential healthcare skills and practical training. This program prepares students for various healthcare support roles, focusing on medical terminology, patient care fundamentals, and clinical procedures.
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
              <p className="text-3xl font-bold text-primary mb-2">Paramedical Certificate</p>
              <p className="text-gray-600 dark:text-gray-400">Healthcare Support Professional</p>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardCheck className="w-8 h-8 text-primary" />
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
                Foundation & Basics
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {["Anatomy & Physiology Basics", "Medical Terminology", "First Aid & Emergency Care", "Infection Control", "Patient Care Fundamentals", "Communication Skills", "Healthcare Ethics", "Computer Basics"].map((subject, index) => (
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
                Advanced Skills & Practice
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {["Advanced Patient Care", "Vital Signs Monitoring", "Wound Care Management", "Medication Administration", "Laboratory Procedures", "Diagnostic Support", "Clinical Practicum", "Final Assessment"].map((subject, index) => (
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
              "Hospital Assistant",
              "Lab Technician Assistant",
              "Pharmacy Assistant",
              "Emergency Medical Technician",
              "Patient Care Assistant",
              "Healthcare Support Worker",
              "Clinic Assistant",
              "Diagnostic Center Staff",
              "Nursing Home Assistant",
              "Rehabilitation Center Staff",
              "Home Healthcare Provider",
              "Further Education in Healthcare"
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

export default OneYearCertificationPage;
