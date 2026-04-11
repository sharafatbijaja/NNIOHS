"use client";
import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Briefcase, Search, Server, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const offerings = [
  {
    icon: Briefcase,
    title: "Custom Web Development",
    description:
      "Next.js 16+ full-stack applications, WordPress, Shopify and ECWID websites built with custom APIs, integrations and modern UI.",
  },
  {
    icon: Search,
    title: "Digital Marketing & SEO",
    description:
      "Technical SEO, Google product listings, ads funnels, content strategy and conversion-focused digital campaigns.",
  },
  {
    icon: Server,
    title: "Hosting & Deployment",
    description:
      "WHM/cPanel, backups, migration, caching, WebP conversion and performance tuning for fast live sites.",
  },
  {
    icon: ShieldCheck,
    title: "UI/UX & QA Testing",
    description:
      "Clean layouts, accessibility checks, cross-browser responsiveness and quality assurance for every project.",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description:
      "API automation, prompt engineering and AI-driven workflows that power smarter web experiences and marketing systems.",
  },
];

const SectionOfferings = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-linear-to-b from-slate-200/70 via-transparent to-transparent dark:from-slate-900/70" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl dark:bg-cyan-500/20" />
      <div className="relative z-10">
        <div className="w-[80%] mx-auto">
          <SectionHeading
            title1="Services"
            title2="I Provide"
            description="Next.js 16+ full-stack development, API automation, AI workflows and modern web apps built for performance and scale."
          />

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {offerings.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="rounded-4xl border border-slate-200/60 bg-white p-8 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 text-primary mb-6 ring-1 ring-primary/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-muted-foreground leading-7">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOfferings;
