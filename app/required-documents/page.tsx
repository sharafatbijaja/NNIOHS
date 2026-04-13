"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { 
  FileText, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  Upload, 
  ArrowRight,
  Info,
  User,
  GraduationCap,
  Shield,
  Home
} from "lucide-react";

const RequiredDocumentsPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Required Documents"
        subtitle="Document Checklist"
        description="Complete List of Documents Required for Admission - Session 2026"
      />

      <div className="max-w-6xl mx-auto mt-12 space-y-12">
        {/* Important Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Document Submission Guidelines
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                All documents must be submitted in original and photocopy form. Original documents will be verified and returned. 
                Photocopies must be attested by a gazetted officer. Incomplete documentation may delay your admission process.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Documents */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Documents</h2>
              <p className="text-gray-600 dark:text-gray-400">Identity and personal information</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { doc: "CNIC / B-Form", desc: "Original + 2 attested photocopies", required: true },
              { doc: "Recent Photographs", desc: "4 passport-size (blue background)", required: true },
              { doc: "Father/Guardian CNIC", desc: "2 attested photocopies", required: true },
              { doc: "Domicile Certificate", desc: "Original + 1 attested photocopy", required: true }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-primary/5 rounded-xl p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.doc}</h3>
                    {item.required && (
                      <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Documents */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Documents</h2>
              <p className="text-gray-600 dark:text-gray-400">Educational certificates and transcripts</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { doc: "Matric Certificate", desc: "Original + 2 attested photocopies", required: true },
              { doc: "Matric Marksheet", desc: "Original + 2 attested photocopies", required: true },
              { doc: "F.Sc Certificate", desc: "Original + 2 attested photocopies", required: true },
              { doc: "F.Sc Marksheet", desc: "Original + 2 attested photocopies", required: true },
              { doc: "Character Certificate", desc: "From last institution (attested)", required: true },
              { doc: "School Leaving Certificate", desc: "Original + 1 attested photocopy", required: false }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-primary/5 rounded-xl p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.doc}</h3>
                    {item.required && (
                      <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical & Other Documents */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Medical & Other Documents</h2>
              <p className="text-gray-600 dark:text-gray-400">Health certificates and additional requirements</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { doc: "Medical Fitness Certificate", desc: "From registered medical practitioner", required: true },
              { doc: "Vaccination Record", desc: "Hepatitis B, Typhoid, Tetanus", required: true },
              { doc: "Blood Test Report", desc: "HIV, Hepatitis B & C screening", required: true },
              { doc: "Affidavit", desc: "On stamp paper regarding conduct", required: true },
              { doc: "Undertaking", desc: "Signed by student and guardian", required: true },
              { doc: "Passport Copy", desc: "For international students only", required: false }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-primary/5 rounded-xl p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.doc}</h3>
                    {item.required && (
                      <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Checklist Summary */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 border-2 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Document Checklist Summary</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">12</h3>
              <p className="text-gray-600 dark:text-gray-400">Total Documents</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10</h3>
              <p className="text-gray-600 dark:text-gray-400">Mandatory Documents</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 mb-4">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">2</h3>
              <p className="text-gray-600 dark:text-gray-400">Optional Documents</p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-amber-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Important Notes</h2>
          </div>
          <div className="space-y-4">
            {[
              "All photocopies must be attested by a Grade-17 or above gazetted officer",
              "Original documents will be returned after verification",
              "Medical certificates must be issued by a government-registered medical practitioner",
              "Recent photographs must be in blue background with white attire",
              "Documents submitted after the deadline will not be accepted",
              "Any discrepancy in documents may lead to cancellation of admission",
              "Keep extra copies of all documents for your personal record"
            ].map((note, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300 text-sm">{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Document Submission Process */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Upload className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Document Submission Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Prepare Documents", desc: "Gather all required documents" },
              { step: "2", title: "Get Attestation", desc: "Attest photocopies as required" },
              { step: "3", title: "Submit Application", desc: "Submit with all documents" },
              { step: "4", title: "Verification", desc: "Original documents verified" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-primary/5 rounded-xl p-6 text-center h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Submit Your Application?</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Ensure you have all the required documents ready before applying. Complete documentation ensures smooth processing of your admission.
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
              href="/eligibility-criteria"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary rounded-full hover:bg-primary-foreground/90 transition-all font-semibold"
            >
              Check Eligibility
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default RequiredDocumentsPage;
