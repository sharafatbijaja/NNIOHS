"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCheck } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Fixed TypingText Component
 * - No more React warning
 * - Smooth typing + deleting
 * - Proper async control (no cascading renders)
 */
const TypingText = ({
  texts,
  speed = 100,
}: {
  texts: string[];
  speed?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentText.length) {
      // typing
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      // deleting
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (!isDeleting && charIndex === currentText.length) {
      // pause before delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && charIndex === 0) {
      // FIXED: async update (no direct setState)
      timeout = setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setIsDeleting(false);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, speed, texts]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="ml-2 -mb-0.75 inline-block w-1 h-7  bg-yellow-200 animate-caret-blink " />
    </span>
  );
};

/**
 * Hero Section (clean + responsive fix)
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="border-b border-primary/20 rounded-b-4xl cta-hero-bg relative overflow-hidden w-full min-h-[98vh] flex items-center justify-center bg-white text-slate-900 dark:bg-gray-950 dark:text-white"
    >
      <div className="cta-hero-orb-1"></div>
      <div className="cta-hero-orb-2s"></div>
      <div className="cta-hero-shimmer"></div>
      <div className="cta-hero-grid"></div>
      <div className="pointer-events-none absolute -left-20 top-12 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl dark:bg-cyan-500/20" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-slate-200/80 to-transparent dark:from-slate-900/80 dark:to-transparent" />
      <div className="relative z-10 text-center px-2 max-w-3xl">
        {/* Status Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xs inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8  bg-slate-50 font-semibold uppercase tracking-widest text-slate-600 dark:border-slate-700 text-nowrap dark:bg-slate-900 dark:text-slate-300"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping"></span>
          {/* Open for opportunities */}
          Admissions Open for 2026
        </motion.span>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          {/* Sharafat{" "} */}
          Ikhlas Institute{" "}
          <span className="text-primary li">of Nursing</span>
        </motion.h1>

        {/* Typing Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-14"
        >
          <TypingText
            texts={[
              "Excellence in Healthcare",
              "Compassionate Nurses",
              "DUHS Affiliated",
              "Future Healthcare Leaders",
            ]}
            speed={50}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="sm:text-base text-gray-600 dark:text-gray-300 mb-8 font-semibold"
        >
          {/* I build fast, scalable web apps and AI-powered systems that actually convert — not just look good. */}
          Part of Ikhlas Group of Colleges | PNMC/PNC-recognized Generic BS
          Nursing (BSN) program with practical and clinical training
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" asChild className="px-5">
            <Link href="/">
              <CheckCheck className="w-5 h-5 mr-2" />
              Apply Now
            </Link>
          </Button>

          <Button variant="link" size="lg" asChild>
            <Link href="/">
              <ArrowRight className="w-5 h-5 mr-2" />
              Explore Programs
            </Link>
          </Button>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Excellence in Nursing Education | Hands-on Training at Dr. Ruth K.M.
            Pfau Civil Hospital Karachi
          </p>

          {/* <Button size="lg" asChild>
            <Link href="/contact">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Link>
          </Button>

          <Button variant="link" size="lg" asChild>
            <Link href="/#projects">
              <ArrowRight className="w-5 h-5 mr-2" />
              View Work
            </Link>
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
