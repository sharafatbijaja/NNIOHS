"use client";
import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { GraduationCap, Shield, Building2, Hospital } from "lucide-react";
import { motion } from "framer-motion";

const affiliations = [
  {
    icon: GraduationCap,
    title: "Dow University of Health Sciences",
    subtitle: "DUHS Affiliation",
    description: "Generic BS Nursing Program",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Pakistan Nursing & Midwifery Council",
    subtitle: "PNMC Recognition",
    description: "National Nursing Certification",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Building2,
    title: "Sindh Nursing Examination Board",
    subtitle: "Sindh Board Approval",
    description: "Provincial Examination Authority",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Hospital,
    title: "Dr. Ruth K.M. Pfau Civil Hospital",
    subtitle: "Clinical Training Affiliation",
    description: "Major Government Hospital Karachi",
    color: "from-orange-500 to-orange-600"
  },
];

const SectionCertifications = () => {
  return (
    <section id="affiliations" className="">
      <div className="w-[80%] mx-auto">
        <SectionHeading
          title1="Affiliations &"
          title2="Recognitions"
          description="Our institute is proud to be associated with prestigious healthcare and educational bodies across Pakistan."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {affiliations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 dark:border-gray-700 dark:from-gray-950 dark:to-gray-900"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary shadow-xl  group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-sm font-medium text-primary mb-1">{item.subtitle}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-full`} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionCertifications;