"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, DollarSign, BookOpen, Briefcase, CheckCircle, ArrowRight, Send } from "lucide-react";

const BSNPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="BSN Degree Program"
        subtitle="Bachelor of Science in Nursing"
        description="Comprehensive 4-year nursing degree program for aspiring registered nurses"
      />

      <div className="max-w-6xl mx-auto mt-12 space-y-12">
        {/* Overview Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Program Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The Bachelor of Science in Nursing (BSN) is a comprehensive 4-year degree program that prepares students for a rewarding career in nursing. Our DUHS-affiliated program combines theoretical knowledge with extensive clinical practice, producing competent and compassionate nursing professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Key Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Duration</h3>
            </div>
            <p className="text-2xl font-bold text-primary mb-2">4 Years</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">8 Semesters</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Eligibility</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">F.Sc Pre-Medical</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Minimum 50% marks</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fee Structure</h3>
            </div>
            <p className="text-2xl font-bold text-primary mb-2">PKR 150K-200K</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Per Year</p>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Curriculum & Subjects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year 1-2 (Foundation)</h3>
              <ul className="space-y-2">
                {["Anatomy & Physiology", "Microbiology", "Biochemistry", "Psychology", "Nutrition", "English", "Computer Applications", "Islamic Studies"].map((subject, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year 3-4 (Advanced)</h3>
              <ul className="space-y-2">
                {["Medical-Surgical Nursing", "Pediatric Nursing", "Obstetric & Gynecological Nursing", "Mental Health Nursing", "Community Health Nursing", "Nursing Research", "Nursing Administration", "Critical Care Nursing"].map((subject, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Career Scope Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Career Scope & Opportunities</h2>
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

        {/* Detailed Fee Structure */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Detailed Fee Structure</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Component</th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Amount (PKR)</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-slate-700">
                  <td className="py-3 px-4">Admission Fee (One-time)</td>
                  <td className="py-3 px-4 font-semibold text-primary">50,000</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-slate-700">
                  <td className="py-3 px-4">Tuition Fee (Per Year)</td>
                  <td className="py-3 px-4 font-semibold text-primary">120,000 - 150,000</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-slate-700">
                  <td className="py-3 px-4">Lab & Library Fee (Per Year)</td>
                  <td className="py-3 px-4 font-semibold text-primary">20,000 - 30,000</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-slate-700">
                  <td className="py-3 px-4">Examination Fee (Per Semester)</td>
                  <td className="py-3 px-4 font-semibold text-primary">10,000 - 15,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Total Annual Cost</td>
                  <td className="py-3 px-4 font-bold text-primary text-lg">150,000 - 200,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 italic">* Fees are approximate and subject to change. Contact administration for exact figures.</p>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="px-5">
            <Link href="/admissions">
              <Send className="w-5 h-5 mr-2" />
              Apply Now
            </Link>
          </Button>
          <Button variant="link" size="lg" asChild>
            <Link href="/courses">
              <ArrowRight className="w-5 h-5 mr-2" />
              View All Courses
            </Link>
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BSNPage;
