"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { 
  CheckCircle, 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Clock, 
  AlertCircle,
  ArrowRight,
  Info
} from "lucide-react";

const EligibilityCriteriaPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Eligibility Criteria"
        subtitle="Admission Requirements"
        description="Check Your Eligibility for Our Nursing Programs - Session 2026"
      />

      <div className="mt-12 space-y-12">
        {/* Important Notice */}
        <section className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Important Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                All applicants must meet the eligibility criteria listed below. Additional requirements may apply for international students. 
                Please review the criteria carefully before applying. For any queries, contact our admissions office.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* BSN Program Eligibility */}
        <section className="container mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">BSN Program</h2>
              <p className="text-gray-600 dark:text-gray-400">Bachelor of Science in Nursing</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Academic Requirements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Academic Requirements
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Qualification", value: "F.Sc Pre-Medical" },
                  { label: "Minimum Marks", value: "50% in F.Sc" },
                  { label: "Subjects", value: "Biology, Chemistry, Physics" },
                  { label: "Education Board", value: "Any recognized board in Pakistan" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-primary/5 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.label}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Requirements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Personal Requirements
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Age Limit", value: "17-25 years" },
                  { label: "Gender", value: "Female candidates only" },
                  { label: "Medical Fitness", value: "Required (medical certificate)" },
                  { label: "Character Certificate", value: "Required from last institution" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-primary/5 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.label}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              Additional Requirements
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Entrance test may be conducted for final selection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Personal interview with admission committee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Domicile certificate (for local candidates)</span>
              </li>
            </ul>
          </div>
          </div>
        </section>

        {/* CNA Program Eligibility */}
        <section className="container mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">CNA Program</h2>
              <p className="text-gray-600 dark:text-gray-400">Certified Nursing Assistant</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Academic Requirements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Academic Requirements
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Qualification", value: "Matriculation (10th Grade)" },
                  { label: "Minimum Marks", value: "45% in Matric" },
                  { label: "Subjects", value: "Science (Biology preferred)" },
                  { label: "Education Board", value: "Any recognized board in Pakistan" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-primary/5 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.label}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Requirements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Personal Requirements
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Age Limit", value: "16-25 years" },
                  { label: "Gender", value: "Female candidates only" },
                  { label: "Medical Fitness", value: "Required (medical certificate)" },
                  { label: "Character Certificate", value: "Required from last institution" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-primary/5 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.label}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-green-600" />
              Additional Requirements
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Basic aptitude test for nursing skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Personal interview with admission committee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Domicile certificate (for local candidates)</span>
              </li>
            </ul>
          </div>
          </div>
        </section>

        {/* General Requirements (Both Programs) */}
        <section className="container mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 border-2 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">General Requirements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Valid CNIC/B-Form",
              "Recent passport-size photographs (4 copies)",
              "Father/Guardian CNIC copy",
              "Domicile certificate",
              "Medical fitness certificate",
              "Character certificate from last institution"
            ].map((requirement, index) => (
              <div key={index} className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-900 dark:text-white text-sm">{requirement}</span>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="container mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-amber-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Important Notes</h2>
          </div>
          <div className="space-y-4">
            {[
              "All documents must be attested by a gazetted officer",
              "Original documents will be verified at the time of admission",
              "Incomplete applications will not be processed",
              "False information may lead to cancellation of admission",
              "The institute reserves the right to reject any application without assigning any reason"
            ].map((note, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300 text-sm">{note}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            If you meet the eligibility criteria, don't wait! Apply now and secure your place in our nursing programs for Session 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-all font-semibold"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/required-documents"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary rounded-full hover:bg-primary-foreground/90 transition-all font-semibold"
            >
              View Required Documents
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default EligibilityCriteriaPage;
