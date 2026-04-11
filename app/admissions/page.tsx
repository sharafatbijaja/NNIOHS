"use client";

import { useState } from "react";
import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, AlertTriangle, CheckCircle, Clock, GraduationCap, Phone, Send } from "lucide-react";

const AdmissionsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in applying for ${formData.course || "a nursing program"} at Naz Nursing Institute. My name is ${formData.name || "[Your Name]"} and my phone number is ${formData.phone || "[Your Phone]"}.`;
    const whatsappUrl = `https://wa.me/923122815799?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <PageWrapper>
      <PageTitle
        title="Admissions"
        subtitle="Apply Now"
        description="Start Your Nursing Career Today - Limited Seats Available"
      />

      <div className="max-w-6xl mx-auto mt-12 space-y-12">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-4 text-white shadow-lg">
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
            <div className="text-center">
              <h2 className="text-lg font-bold mb-1">⚠️ Limited Seats Available!</h2>
              <p className="text-sm opacity-90">Admissions Closing Soon - Apply Today to Secure Your Spot</p>
            </div>
            <Clock className="w-5 h-5 animate-pulse" />
          </div>
        </div>

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
                  <label htmlFor="course" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Select Course *
                  </label>
                  <select
                    id="course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
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

          {/* WhatsApp CTA & Contact Info */}
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

            {/* Important Dates */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Important Dates
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Admission Start:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">January 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Last Date to Apply:</span>
                  <span className="font-semibold text-red-500">March 31, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Classes Begin:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">April 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Apply Now Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why Apply Now?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Limited Seats",
                desc: "Only a few seats remaining for upcoming session"
              },
              {
                icon: GraduationCap,
                title: "Early Bird Discount",
                desc: "Apply now and get special discount on admission fee"
              },
              {
                icon: CheckCircle,
                title: "Secure Your Future",
                desc: "Start your nursing career with Pakistan's leading institute"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => document.getElementById("name")?.focus()}
            className="px-5"
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
