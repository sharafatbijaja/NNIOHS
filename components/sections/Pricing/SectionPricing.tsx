"use client";

import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { pricingPlans } from "@/data";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SectionPricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gray-50 dark:bg-gray-950 py-25"
      aria-label="Pricing section"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-linear-to-b from-slate-200/70 via-transparent to-transparent dark:from-slate-900/70" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl dark:bg-cyan-500/20" />

      <div className="relative z-10">
        {/* Section Heading */}
        <div className="w-[80%] mx-auto">
          <SectionHeading
            title1="Pricing"
            title2="Plans"
            description="Choose the perfect plan for your business needs. All plans include professional support and quality deliverables."
          />
        </div>

        {/* Pricing Cards Grid */}
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 w-[80%] mx-auto mt-12">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative rounded-4xl border p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.highlighted
                  ? "border-primary bg-white shadow-xl dark:bg-white/10"
                  : "border-slate-200/60 bg-white dark:border-white/10 dark:bg-white/5"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                {plan.name}
              </h3>

              {/* Tagline */}
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                {plan.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <Check className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Button */}
              <Button
                className={`w-full group ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-gray-100"
                }`}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact for Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPricing;
