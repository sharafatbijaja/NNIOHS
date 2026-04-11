"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, DollarSign, Briefcase, CheckCircle, ArrowRight, Stethoscope, Users, Send } from "lucide-react";

const CNAPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="CNA Diploma Program"
        subtitle="Certified Nursing Assistant"
        description="Intensive 2-year certification program for entry-level nursing positions"
      />

      <div className="max-w-6xl mx-auto mt-12 space-y-12">
        {/* Overview Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Stethoscope className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Program Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The Certified Nursing Assistant (CNA) program is a comprehensive 2-year diploma designed to provide students with fundamental nursing skills and practical healthcare training. This program is perfect for those seeking quick entry into the healthcare field with hands-on experience and industry-recognized certification.
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
            <p className="text-2xl font-bold text-primary mb-2">2 Years</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">4 Semesters</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Eligibility</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Matriculation</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Science Background</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fee Structure</h3>
            </div>
            <p className="text-2xl font-bold text-primary mb-2">PKR 80K-120K</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Per Year</p>
          </div>
        </div>

        {/* Practical Training Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Practical Training & Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Clinical Skills</h3>
              <ul className="space-y-2">
                {["Patient Care & Hygiene", "Vital Signs Monitoring", "Wound Care & Dressing", "Medication Administration", "Infection Control", "CPR & Basic Life Support", "Patient Mobility Assistance", "Medical Documentation"].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Training Components</h3>
              <ul className="space-y-2">
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

        {/* Job Opportunities Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Job Opportunities</h2>
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
                  <td className="py-3 px-4 font-semibold text-primary">25,000</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-slate-700">
                  <td className="py-3 px-4">Tuition Fee (Per Year)</td>
                  <td className="py-3 px-4 font-semibold text-primary">60,000 - 80,000</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-slate-700">
                  <td className="py-3 px-4">Practical Training Fee (Per Year)</td>
                  <td className="py-3 px-4 font-semibold text-primary">15,000 - 25,000</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-slate-700">
                  <td className="py-3 px-4">Examination Fee (Per Semester)</td>
                  <td className="py-3 px-4 font-semibold text-primary">5,000 - 8,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Total Annual Cost</td>
                  <td className="py-3 px-4 font-bold text-primary text-lg">80,000 - 120,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 italic">* Fees are approximate and subject to change. Contact administration for exact figures.</p>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Why Choose Our CNA Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Quick Start", desc: "Start your healthcare career in just 2 years" },
              { icon: Users, title: "Hands-on Training", desc: "Extensive practical experience in real healthcare settings" },
              { icon: Briefcase, title: "Job Ready", desc: "Industry-recognized certification for immediate employment" },
              { icon: CheckCircle, title: "Support", desc: "Job placement assistance and career guidance" }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary mx-auto mb-3">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
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

export default CNAPage;
