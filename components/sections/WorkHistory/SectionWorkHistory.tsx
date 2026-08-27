"use client";
import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { motion } from "framer-motion";

const timeline = [
  {
    role: "Founded by Waseem Welfare Trust",
    company: "Ikhlas Institute of Nursing",
    period: "2017",
    description:
      "Established with the noble goal of addressing the shortage of well-trained nursing professionals in Karachi and Pakistan.",
  },
  {
    role: "Clinical training through affiliated hospitals",
    company: "Clinical Integration",
    period: "2017 – Present",
    description:
      "Designed to give students immediate access to real clinical settings from the very beginning of their studies.",
  },
  {
    role: "DUHS Affiliation Secured",
    company: "Dow University of Health Sciences",
    period: "2018",
    description:
      "Achieved formal affiliation with DUHS for Generic BS Nursing Program, ensuring academic standards meet national criteria.",
  },
  {
    role: "PNMC Recognition",
    company: "Pakistan Nursing & Midwifery Council",
    period: "2019",
    description:
      "Received official recognition from PNMC, validating our nursing education programs against national standards.",
  },
  {
    role: "Steady Growth & Recognition",
    company: "Institute Expansion",
    period: "2020 – Present",
    description:
      "Grown steadily earning recognition for commitment to quality education and practical training in healthcare sector.",
  },
];

const SectionWorkHistory = () => {
  return (
    <section id="history" className="">
      <div className="w-[80%] mx-auto">
        <SectionHeading
          title1="Our"
          title2="History"
          description="From a vision in 2017 to a recognized nursing institution, building competent healthcare professionals for Pakistan."
        />

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 top-0 h-full w-1 rounded-full bg-primary/20" />
          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.article
                key={`${item.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative rounded-3xl border border-slate-200/80 bg-slate-50 p-7 pl-10 shadow-sm dark:border-gray-700 dark:bg-gray-900"
              >
                <span className="animate-pulse brightness-100 absolute -left-6 top-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white dark:ring-slate-950 font-bold">
                  {index + 1}
                </span>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                  <span className="rounded-full text-nowrap bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-3">
                  {item.company}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-7">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWorkHistory;
