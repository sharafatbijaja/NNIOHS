"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Briefcase, CheckCircle, ArrowRight, Stethoscope, Users, Send } from "lucide-react";

const CNAPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="CNA Diploma Program"
        subtitle="Certified Nursing Assistant"
        description="Intensive 2-year certification program for entry-level nursing positions"
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto space-y-12">
        {/* Program Introduction */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="inline-flex h-16 w-16 items-center justify-center text-primary">
              <Stethoscope className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Program Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The Certified Nursing Assistant (CNA) program is a comprehensive 2-year diploma designed to provide students with fundamental nursing skills and practical healthcare training. This program is perfect for those seeking quick entry into the healthcare field with hands-on experience and industry-recognized certification.
              </p>
            </div>
          </div>
        </div>

        {/* Duration & Diploma */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Duration & Diploma</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Program Duration</h3>
              <p className="text-3xl font-bold text-primary mb-2">2 Years</p>
              <p className="text-gray-600 dark:text-gray-400">4 Semesters</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Diploma Awarded</h3>
              <p className="text-3xl font-bold text-primary mb-2">CNA</p>
              <p className="text-gray-600 dark:text-gray-400">Certified Nursing Assistant</p>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Academic Qualification</h4>
                  <p className="text-gray-600 dark:text-gray-400">Matriculation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Subject Background</h4>
                  <p className="text-gray-600 dark:text-gray-400">Science</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Age Requirement</h4>
                  <p className="text-gray-600 dark:text-gray-400">16-25 years</p>
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

        {/* Curriculum Outline */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Curriculum Outline</h2>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="bg-primary text-white text-sm px-3 py-1 rounded-full text-nowrap">Year 1</span>
                Foundation & Basic Skills
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {["Patient Care & Hygiene", "Vital Signs Monitoring", "Wound Care & Dressing", "Medication Administration", "Infection Control", "CPR & Basic Life Support", "Patient Mobility Assistance", "Medical Documentation"].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="bg-primary text-white text-sm px-3 py-1 rounded-full  text-nowrap">Year 2</span>
                Advanced Training & Practice
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {["Hospital Rotations", "Lab Practice Sessions", "Simulation Training", "Clinical Supervision", "Emergency Response Training", "Communication Skills", "Patient Safety Protocols", "Team Collaboration"].map((component, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {component}
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
              "Hospital Nursing Assistant",
              "Home Health Care Aide",
              "Clinic Assistant",
              "Rehabilitation Center Staff",
              "Long-term Care Facility",
              "Private Duty Caregiver",
              "Emergency Room Assistant",
              "Outpatient Department Staff",
              "Nursing Home Assistant",
              "Patient Care Technician",
              "Medical Office Assistant",
              "Quick Career Entry"
            ].map((opportunity, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{opportunity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="px-8">
            <Link href="/admissions">
              <Send className="w-5 h-5 mr-2" />
              Apply Now
            </Link>
          </Button>
          <Button variant="link" size="lg" asChild>
            <Link href="/programs">
              <ArrowRight className="w-5 h-5 mr-2" />
              View All Programs
            </Link>
          </Button>
        </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default CNAPage;
