"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, BookOpen, Briefcase, CheckCircle, ArrowRight, Send } from "lucide-react";

const BSNPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="BSN Degree Program"
        subtitle="Bachelor of Science in Nursing"
        description="Comprehensive 4-year nursing degree program for aspiring registered nurses"
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto space-y-12">
        {/* Program Introduction */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="inline-flex h-16 w-16 items-center justify-center text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Program Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The Bachelor of Science in Nursing (BSN) is a comprehensive 4-year degree program that prepares students for a rewarding career in nursing. Our DUHS-affiliated program combines theoretical knowledge with extensive clinical practice, producing competent and compassionate nursing professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Duration & Degree */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Duration & Degree</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Program Duration</h3>
              <p className="text-3xl font-bold text-primary mb-2">4 Years</p>
              <p className="text-gray-600 dark:text-gray-400">8 Semesters</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Degree Awarded</h3>
              <p className="text-3xl font-bold text-primary mb-2">BSN</p>
              <p className="text-gray-600 dark:text-gray-400">Bachelor of Science in Nursing</p>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Academic Qualification</h4>
                  <p className="text-gray-600 dark:text-gray-400">F.Sc Pre-Medical</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Minimum Marks</h4>
                  <p className="text-gray-600 dark:text-gray-400">50% in F.Sc</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Age Requirement</h4>
                  <p className="text-gray-600 dark:text-gray-400">18-35 years</p>
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
            {/* First Year */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">Year 1</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Semester I</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Fundamental of Nursing-I", "Anatomy & Physiology-I", "English-I", "Microbiology", "Information & Communication Technology*", "Biochemistry for Nurses*", "Ideology & Constitution of Pakistan*"].map((subject, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Semester II</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Fundamental of Nursing-II", "Anatomy & Physiology-II", "Theoretical Basis of Nursing*", "Quantitative Reasoning-I*", "Islamic Studies / Ethics*", "Pakistan Studies*", "Applied Nutrition*"].map((subject, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Second Year */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">Year 2</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Semester III</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Medical Surgical Nursing-I", "Health Assessment-I", "Pathophysiology-I", "Clinical Pharmacology and Drug Administration-I", "Professional Communication Skills"].map((subject, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Semester IV</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Medical Surgical Nursing – II", "Health Assessment-II", "Pathophysiology-II", "Clinical Pharmacology and Drug Administration-II", "Professional Ethics for Nurses"].map((subject, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Third Year */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">Year 3</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Semester V</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Pediatric Health Nursing", "Maternal, Neonatal and Child Health Nursing", "Epidemiology", "Infectious Diseases", "Civics and Community Engagement"].map((subject, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Semester VI</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Public Health Nursing", "Mental Health Nursing", "Principles of Teaching & Learning", "Introduction to Biostatistics", "Culture, Health & Society"].map((subject, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Fourth Year */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">Year 4</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Semester VII</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Critical Care Nursing", "Introduction to Nursing Research", "Leadership & Management", "Elective", "Entrepreneurship"].map((subject, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Semester VIII</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Geriatric Nursing", "Trends and Issues in Health Care", "Elective", "Expository Writing", "Clinical Practicum"].map((subject, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
              "Registered Nurse (RN)",
              "Staff Nurse in Hospitals",
              "ICU/CCU Nurse",
              "Pediatric Nurse",
              "Operation Theatre Nurse",
              "Nursing Instructor",
              "Nurse Manager",
              "Community Health Nurse",
              "Research Nurse",
              "Military Nursing",
              "International Opportunities",
              "Higher Studies (MSN, PhD)"
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

export default BSNPage;
