"use client";
import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Brain, 
  Code2, 
  Globe, 
  Zap, 
  Layers, 
  ArrowRight,
  Sparkles,
  Database,
  Layout,
  Bot,
  Target,
  Rocket,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: Brain,
    title: "System Designer",
    description: "Not just a coder - I architect complete systems. From idea to implementation, I transform concepts into scalable, production-ready solutions.",
    color: "from-purple-500 to-purple-600",
    features: ["System Architecture", "API Design", "Database Schema", "Security Planning"]
  },
  {
    icon: Cpu,
    title: "AI-Powered Development",
    description: "Leveraging cutting-edge AI tools and APIs to build intelligent applications that automate tasks and enhance user experiences.",
    color: "from-blue-500 to-blue-600",
    features: ["OpenAI Integration", "Custom AI Agents", "Prompt Engineering", "Automation Workflows"]
  },
  {
    icon: Code2,
    title: "Next.js 16.2 Expert",
    description: "Building modern, high-performance web applications with latest Next.js features including Server Components, App Router, and more.",
    color: "from-green-500 to-green-600",
    features: ["Server Components", "App Router", "API Routes", "Optimized Performance"]
  },
  {
    icon: Globe,
    title: "SEO-First Approach",
    description: "8+ years of SEO expertise ensures your web apps rank well. Technical SEO, semantic HTML, and performance optimization built-in.",
    color: "from-orange-500 to-orange-600",
    features: ["Technical SEO", "Core Web Vitals", "Schema Markup", "Speed Optimization"]
  },
  {
    icon: Layout,
    title: "Modern UI Frameworks",
    description: "Expert in Tailwind CSS, shadcn/ui, and Aceternity UI. Creating stunning, responsive, and accessible interfaces.",
    color: "from-pink-500 to-pink-600",
    features: ["Tailwind CSS", "shadcn/ui", "Aceternity UI", "Responsive Design"]
  },
  {
    icon: Database,
    title: "API Integration Master",
    description: "Seamlessly integrating third-party APIs and building custom APIs. Payment gateways, CRMs, AI services, and more.",
    color: "from-cyan-500 to-cyan-600",
    features: ["REST APIs", "GraphQL", "Webhooks", "Third-party Integrations"]
  }
];

const techStack = [
  { name: "Next.js 16.2", icon: Code2, level: 95 },
  { name: "Tailwind CSS", icon: Layout, level: 98 },
  { name: "shadcn/ui", icon: Layers, level: 95 },
  { name: "AI Integration", icon: Bot, level: 90 },
  { name: "SEO Optimization", icon: Target, level: 92 },
  { name: "API Development", icon: Database, level: 88 }
];

const SectionCapabilities = () => {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-25">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-pink-500/10 to-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="relative z-10 w-[80%] mx-auto">
        <SectionHeading
          title1="What I"
          title2="Can Do"
          description="Transforming ideas into reality with 8+ years of programming expertise, AI-powered solutions, and modern web technologies."
        />

        {/* Hero Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 border border-primary/20 mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">System Designer & Full-Stack Developer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-white">
            I Don't Just Code.<br />I Build Systems.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            With 8+ years of programming knowledge and expertise in Next.js 16.2, AI integration, and SEO-oriented web development, 
            I can transform any idea into a fully functional, scalable, and high-performance web application.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative rounded-4xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 dark:border-gray-700 dark:from-gray-950 dark:to-gray-900"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-4xl bg-gradient-to-br ${capability.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />
                
                {/* Icon */}
                <div className={`relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${capability.color} text-white shadow-xl ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="relative mb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                  {capability.description}
                </p>

                {/* Features */}
                <ul className="relative space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400">
                      <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${capability.color}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${capability.color} transition-all duration-500 group-hover:w-full`} />
              </motion.article>
            );
          })}
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="rounded-4xl border border-slate-200/80 bg-gradient-to-br from-slate-900 to-slate-950 p-10 shadow-2xl dark:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/10">
              <Rocket className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Tech Stack Expertise</h3>
              <p className="text-sm text-slate-400">Proficiency levels based on real-world projects</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white/5 p-6 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-white">{tech.name}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Proficiency</span>
                      <span>{tech.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 mb-6 border border-primary/20">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">8+ Years of Experience</span>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Ready to Transform Your Idea?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you build a powerful, AI-driven, SEO-optimized web application that stands out.
          </p>
          <Button 
            asChild
            size="lg"
            className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-xl hover:shadow-2xl transition-all"
          >
            <a href="#contact" className="flex items-center gap-2">
              Let's Build Something Amazing
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionCapabilities;
