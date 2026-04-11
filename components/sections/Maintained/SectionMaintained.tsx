"use client";
import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { BadgeCheck, Layers, Layout, ShoppingCart, Globe, ExternalLink, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const maintainedSections = [
  {
    icon: BadgeCheck,
    title: "Elementor Pro",
    description: "Custom Elementor builds with advanced widgets and animations",
    items: [
      "bijaja.com.pk",
      "universal-solvent.com",
      "dubaifastrenovation.com",
      "infinitrs.com",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Layout,
    title: "Astra & GeneratePress",
    description: "Lightweight themes with custom CSS and performance optimization",
    items: [
      "aimapple.com",
      "signlabusa.com",
      "dartfordtaxis247.co.uk",
      "ironcastsolutions.com",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: ShoppingCart,
    title: "Shopify & ECWID",
    description: "E-commerce platforms with payment gateways and inventory management",
    items: [
      "glowsynth.pk",
      "aromaexclusive.com",
      "olympiafurniture.co.uk",
      "wefair.co.uk",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Layers,
    title: "Licensed Themes",
    description: "Premium theme implementations with custom modifications",
    items: [
      "doorvana.com",
      "grandviewhomes.com",
      "multitransporters.com",
      "tripleaggroup.com",
    ],
    color: "from-orange-500 to-orange-600",
  },
];

const stats = [
  { label: "Total Sites", value: "16+", icon: Globe },
  { label: "Platforms", value: "4", icon: Layers },
  { label: "Active Support", value: "24/7", icon: Shield },
];

const SectionMaintained = () => {
  return (
    <section id="maintained" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-25">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute left-0 top-40 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-40 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      
      <div className="relative z-10 w-[80%] mx-auto">
        <SectionHeading
          title1="Maintained"
          title2="Projects"
          description="A curated selection of sites managed across WordPress, Shopify, ECWID and licensed theme environments."
        />

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-950"
              >
                <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/10">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 xl:grid-cols-2">
          {maintainedSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-100px" }}
                className="overflow-hidden group relative rounded-4xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 dark:border-gray-700 dark:from-gray-950 dark:to-gray-900"
              >
                {/* Gradient border effect on hover */}
                <div className={`absolute inset-0 rounded-4xl bg-gradient-to-r ${section.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                
                {/* Header */}
                <div className="relative mb-6 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${section.color} text-white shadow-lg ring-1 ring-white/20`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{section.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{section.description}</p>
                    </div>
                  </div>
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-gray-800 dark:text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>

                {/* Sites List */}
                <ul className="relative space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 + itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="group/item flex items-center gap-3 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700 transition-all hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:translate-x-1 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-primary/10"
                    >
                      <Zap className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover/item:opacity-100" />
                      <span className="flex-1">{item}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-slate-400 opacity-0 transition-opacity group-hover/item:opacity-100" />
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${section.color} transition-all duration-500 group-hover:w-full`} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionMaintained;
