"use client";

import { useState } from "react";
import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import SectionHeading from "@/components/common/SectionHeading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  CheckCircle,
  Clock,
  GraduationCap,
  Phone,
  Send,
  FileText,
  Users,
  Award,
  Calendar,
  ClipboardCheck,
  ArrowRight,
  MapPin,
  Mail
} from "lucide-react";

const ApplyNowPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    city: ""
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
        title="Apply Now"
        subtitle="Start Your Journey"
        description="Take the First Step Towards Your Nursing Career - Session 2026"
      />



      <div className="mt-12 space-y-12">
        {/* Admissions Open Banner */}
        <section className="container mx-auto py-0">
                <SectionHeading
        title1="Take the First"
        title2="Step"
        description="Apply now and begin your journey towards a rewarding nursing career"
      />
          <div className="max-w-250 mx-auto bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/10 dark:to-primary/10 rounded-2xl p-8 border-2 border-primary/20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white animate-pulse">
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
            Applications are now open for the 2026 academic session. Secure your place in Pakistan's leading nursing institute and start your journey towards a rewarding healthcare career.
          </p>
          </div>
        </section>

        {/* Application Process Steps */}
        <section className="container mx-auto py-0">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardCheck className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Application Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Submit Application", desc: "Fill out the online application form" },
              { step: "2", title: "Document Review", desc: "Submit required documents" },
              { step: "3", title: "Interview", desc: "Attend admission interview" },
              { step: "4", title: "Enrollment", desc: "Complete enrollment process" }
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
        </section>

        {/* Application Form */}
        <section className="max-w-200 mx-auto py-0">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Application Form</h2>
          </div>
          
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Application Submitted Successfully!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our admission team will contact you within 24-48 hours.
              </p>
              <Button onClick={() => setSubmitted(false)} className="bg-primary hover:bg-primary/90">
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Program of Interest *
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a program</option>
                    <option value="BSN">BSN (Bachelor of Science in Nursing)</option>
                    <option value="CNA">CNA (Certified Nursing Assistant)</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    City
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
                <Button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Apply via WhatsApp
                </Button>
              </div>
            </form>
          )}
          </div>
        </section>

        {/* Important Dates */}
        <section className="container mx-auto py-0">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Important Dates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Admission Start</h3>
              <p className="text-xl font-bold text-primary">January 2026</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 text-center border-2 border-red-200 dark:border-red-800">
              <Clock className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Last Date to Apply</h3>
              <p className="text-xl font-bold text-red-500">March 31, 2026</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 text-center">
              <GraduationCap className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Classes Begin</h3>
              <p className="text-xl font-bold text-primary">April 2026</p>
            </div>
          </div>
          </div>
        </section>

   
      </div>
    </PageWrapper>
  );
};

export default ApplyNowPage;
