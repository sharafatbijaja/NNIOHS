"use client";

import { useState } from "react";
import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Clock, GraduationCap, Phone, Send, FileText, Users, Award, Calendar, ClipboardCheck } from "lucide-react";

const AdmissionsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in applying for ${formData.program || "a nursing program"} at Naz Nursing Institute. My name is ${formData.name || "[Your Name]"} and my phone number is ${formData.phone || "[Your Phone]"}.`;
    const whatsappUrl = `https://wa.me/923122815799?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <PageWrapper>
      <PageTitle
        title="Admissions"
        subtitle="Apply Now"
        description="Start Your Nursing Career Today - Session 2026"
      />

      <div className="max-w-6xl mx-auto mt-12 space-y-12">
        {/* Admissions Open - Session 2026 */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 border-2 border-primary/20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Admissions Open
              </h2>
              <p className="text-xl text-primary font-semibold">Session 2026</p>
            </div>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Applications are now open for 2026 academic session. Secure your place in Pakistan's leading nursing institute and start your journey towards a rewarding healthcare career.
          </p>
        </div>

        {/* Important Dates & Deadlines */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Important Dates & Deadlines</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Admission Start</h3>
              <p className="text-2xl font-bold text-primary">January 2026</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 text-center border-2 border-red-200 dark:border-red-800">
              <Clock className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Last Date to Apply</h3>
              <p className="text-2xl font-bold text-red-500">March 31, 2026</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <GraduationCap className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Classes Begin</h3>
              <p className="text-2xl font-bold text-primary">April 2026</p>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria (Both Programs) */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BSN Eligibility */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                BSN Program
              </h3>
              <ul className="space-y-3">
                {[
                  "F.Sc Pre-Medical",
                  "Minimum 50% marks",
                  "Age: 17-25 years",
                  "Medical fitness required",
                  "Valid CNIC/B-Form"
                ].map((criteria, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    {criteria}
                  </li>
                ))}
              </ul>
            </div>

            {/* CNA Eligibility */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-green-600" />
                CNA Program
              </h3>
              <ul className="space-y-3">
                {[
                  "Matriculation (Science)",
                  "Minimum 45% marks",
                  "Age: 16-25 years",
                  "Medical fitness required",
                  "Valid CNIC/B-Form"
                ].map((criteria, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    {criteria}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Required Documents</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "CNIC / B-Form",
              "Father's/Guardian's CNIC",
              "Recent Passport Size Photos (4)",
              "Matriculation Certificate",
              "F.Sc Certificate (for BSN)",
              "Domicile Certificate",
              "Medical Fitness Certificate",
              "Character Certificate",
              "Affidavit (if applicable)"
            ].map((doc, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{doc}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
            * All documents must be attested. Bring original documents for verification at time of admission.
          </p>
        </div>

        {/* Selection Process */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardCheck className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Selection Process</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Application Submission</h3>
                <p className="text-gray-600 dark:text-gray-400">Submit your application online or in person with all required documents before deadline.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Entry Test</h3>
                <p className="text-gray-600 dark:text-gray-400">Appear for written entry test covering English, Science, and General Knowledge.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Interview</h3>
                <p className="text-gray-600 dark:text-gray-400">Qualified candidates will be called for a personal interview to assess aptitude and communication skills.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Final Selection</h3>
                <p className="text-gray-600 dark:text-gray-400">Merit list will be prepared based on entry test, interview, and academic performance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Merit List Information */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 border-2 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Merit List Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Merit List Display</h4>
                  <p className="text-gray-600 dark:text-gray-400">Merit lists will be displayed on institute notice board and website.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Selection Criteria</h4>
                  <p className="text-gray-600 dark:text-gray-400">50% marks in entry test, 30% academic, 20% interview.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Waiting List</h4>
                  <p className="text-gray-600 dark:text-gray-400">Waiting list will be maintained for additional seats if any become available.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Appeal Process</h4>
                  <p className="text-gray-600 dark:text-gray-400">Candidates can appeal within 7 days of merit list display.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Application Form</h2>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Thank you for your interest. Our admission team will contact you shortly.</p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary text-primary-foreground"
                >
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="03XX-XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Select Program *
                  </label>
                  <select
                    id="program"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Choose a program</option>
                    <option value="BSN">BSN - Bachelor of Science in Nursing (4 Years)</option>
                    <option value="CNA">CNA - Certified Nursing Assistant (2 Years)</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            )}
          </div>

          {/* Contact Options */}
          <div className="space-y-6">
            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-2xl p-6 text-white shadow-lg border-2 border-green-400/30 dark:border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h2 className="text-xl font-bold">Quick Apply via WhatsApp</h2>
              </div>
              <p className="text-base mb-5 opacity-95 leading-relaxed">
                Get instant assistance and apply directly through WhatsApp. Our admission counselors are ready to help you!
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-white text-green-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-green-400 dark:hover:bg-gray-800 py-3 text-base font-semibold shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Apply via WhatsApp
              </Button>
            </div>

            {/* Phone Contact */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-8 h-8 text-primary" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Call Us Directly</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Prefer to speak with our admission team? Give us a call!
              </p>
              <a
                href="tel:03122815799"
                className="block text-center text-2xl font-bold text-primary hover:underline"
              >
                0312-2815799
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 text-center">
                Available Mon-Sat, 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => document.getElementById("name")?.focus()}
            className="px-8"
          >
            <Send className="w-5 h-5 mr-2" />
            Apply Now
          </Button>
          <Button
            size="lg"
            variant="link"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AdmissionsPage;

