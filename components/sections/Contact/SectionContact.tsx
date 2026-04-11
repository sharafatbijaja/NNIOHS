"use client";
import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, socialLinks } from "@/data";
import { Send, Mail, Phone, MapPin, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SectionContact = () => {
  return (
    <section id="contact" className="" aria-label="Contact section">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 to-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl" />
      
      <div className="relative z-10 w-[80%] mx-auto">
        <SectionHeading
          title1="Get In"
          title2="Touch"
          description="Have a question about our nursing programs? Fill out the form below and we will get back to you as soon as possible."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-2 border border-primary/20">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Join Our Nursing Family</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white py-2">
                Start Your Nursing Career Today
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Naz Nursing Institute of Health Sciences is committed to providing high-quality, practical-oriented nursing education that meets national and international standards.
                We aim to produce competent, compassionate, and ethically grounded nursing professionals who can serve the healthcare sector with excellence and dedication.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    target="_blank"
                    className="group flex items-center gap-4 p-5 bg-gradient-to-br from-white to-slate-50 rounded-full border border-slate-200/80 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 dark:border-gray-700 dark:from-gray-950 dark:to-gray-900"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{item.label}</p>
                      <p className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      target="_blank"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary brightness-115 hover:bg-primary/90 transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Location Badge */}
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-6 border border-primary/20">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Based in Karachi, Pakistan</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Affiliated with Dow University of Health Sciences</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-4xl border border-slate-200/80 shadow-2xl dark:border-gray-700 dark:from-gray-950 dark:to-gray-900">
              {/* Form Header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-200/60 dark:border-gray-700">
                <div className="animate-bounce inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/10">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send a Message</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">We'll get back to you within 24 hours</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Student Name
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        placeholder="Asif Khan"
                        required
                        className="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="youremail@gmail.com"
                        required
                        className="pl-10 bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Contact Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9+ ]*"
                      placeholder="+92 300 1234567"
                      required
                      className="pl-10 bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="General Question"
                      required
                      className="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your inquiry or question..."
                    required
                    className="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 focus:border-primary focus:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="py-5 w-full group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-md hover:shadow-2xl transition-all cursor-pointer"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
