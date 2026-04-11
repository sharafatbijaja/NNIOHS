"use client";
import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Eye, Target, Heart, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const visionPoints = [
  { icon: Eye, text: "One of the most respected nursing institutions in Pakistan" },
  { icon: Target, text: "Academic excellence and innovative teaching methods" },
  { icon: Heart, text: "Producing skilled nurses who improve healthcare services nationwide" },
];

const missionPoints = [
  { icon: CheckCircle2, text: "Deliver superior nursing education through theoretical knowledge and extensive clinical practice" },
  { icon: CheckCircle2, text: "Foster critical thinking, leadership qualities, and strong professional ethics" },
  { icon: CheckCircle2, text: "Prepare nurses ready to meet evolving challenges of modern healthcare" },
  { icon: CheckCircle2, text: "Promote community health awareness and contribute to societal welfare" },
];

const SectionImpact = () => {
  return (
    <section id="impact" className="">
      <div className="container mx-auto">
        <SectionHeading
          title1="Vision &"
          title2="Mission"
          description="Our guiding principles that drive us to produce competent, compassionate nursing professionals."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-3xl  bg-white p-10 shadow-xl dark:border-gray-700 dark:bg-gray-900"
          >
            {/* Badge */}
            {/* <div className="absolute -top-4 left-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/80 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                <Eye className="h-3.5 w-3.5" />
                <span>Our Vision</span>
              </div>
            </div> */}

            {/* Header */}
            <div className="flex items-center gap-3 mb-6 mt-2">
              <div className="animate-caret-blink inline-flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/10">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">Future Direction</span>
                <p className="text-sm text-slate-500 dark:text-slate-400">Where we aim to be</p>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Shaping the Future of Nursing Education
            </h3>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 leading-8 mb-8">
              To become one of the most respected nursing institutions in Pakistan, known for academic excellence, innovative teaching methods, and producing skilled nurses who contribute significantly to the improvement of healthcare services in the country and beyond.
            </p>

            {/* Vision Points */}
            <div className="space-y-4">
              {visionPoints.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/5 text-primary ring-1 ring-primary/10 group-hover:scale-110 transition-transform">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-7 flex-1">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-white p-10 shadow-xl dark:border-gray-700 dark:bg-gray-900"
          >
            {/* Badge */}
            {/* <div className="absolute -top-4 left-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-4 py-2 text-xs font-semibold text-white shadow-lg">
                <Lightbulb className="h-3.5 w-3.5" />
                <span>Our Mission</span>
              </div>
            </div> */}

            {/* Header */}
            <div className="flex items-center gap-3 mb-6 mt-2">
              <div className="animate-caret-blink inline-flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/10">
                <ArrowRight className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">Our Purpose</span>
                <p className="text-sm text-slate-500 dark:text-slate-400">What drives us daily</p>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Our Guiding Mission
            </h3>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 leading-8 mb-8">
              We are dedicated to delivering superior nursing education and preparing healthcare professionals who serve with competence, compassion, and confidence.
            </p>

            {/* Mission Points */}
            <div className="space-y-4">
              {missionPoints.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/5 text-primary ring-1 ring-primary/10 group-hover:scale-110 transition-transform">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-7 flex-1">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionImpact;