"use client";

import React from "react";
import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { ArrowRight, CheckCircle, FileCode, Home, Info, Phone, GraduationCap, Eye } from "lucide-react";

// Import all used sections
import Hero2 from "@/components/sections/Hero2/Hero2";
import SectionAbout from "@/components/sections/About/SectionAbout";
import SectionSkills from "@/components/sections/Skills/SectionSkills";
import Experience from "@/components/sections/Experience/Experience";
import ClientReview from "@/components/sections/ClientReview/ClientReview";
import SectionCallToAction2 from "@/components/sections/CallToAction/SectionCallToAction2";
import SectionImpact from "@/components/sections/Impact/SectionImpact";
import SectionWorkHistory from "@/components/sections/WorkHistory/SectionWorkHistory";
import SectionStatsBanner from "@/components/sections/StatsBanner/SectionStatsBanner";
import SectionCertifications from "@/components/sections/Certifications/SectionCertifications";
import SectionContact from "@/components/sections/Contact/SectionContact";

const UsedComponentsPage = () => {
  const [showPreview, setShowPreview] = React.useState(false);

  const usedSections = [
    {
      name: "Hero2",
      path: "Hero2/Hero2.tsx",
      description: "Main hero section with gradient background",
      usedIn: ["Home Page (/)"],
      icon: <Home className="w-5 h-5" />
    },
    {
      name: "SectionAbout",
      path: "About/SectionAbout.tsx",
      description: "About section with company information",
      usedIn: ["Home Page (/)"],
      icon: <Info className="w-5 h-5" />
    },
    {
      name: "SectionSkills",
      path: "Skills/SectionSkills.tsx",
      description: "Skills showcase with skill cards",
      usedIn: ["Home Page (/)"],
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      name: "Experience",
      path: "Experience/Experience.tsx",
      description: "Work experience timeline section",
      usedIn: ["Home Page (/)"],
      icon: <FileCode className="w-5 h-5" />
    },
    {
      name: "ClientReview",
      path: "ClientReview/ClientReview.tsx",
      description: "Client testimonials and reviews",
      usedIn: ["Home Page (/)"],
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      name: "SectionCallToAction2",
      path: "CallToAction/SectionCallToAction2.tsx",
      description: "Call to action section (variant 2)",
      usedIn: ["Home Page (/)"],
      icon: <ArrowRight className="w-5 h-5" />
    },
    {
      name: "SectionImpact",
      path: "Impact/SectionImpact.tsx",
      description: "Impact and statistics section",
      usedIn: ["About Page (/about)"],
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      name: "SectionWorkHistory",
      path: "WorkHistory/SectionWorkHistory.tsx",
      description: "Work history and achievements",
      usedIn: ["About Page (/about)"],
      icon: <FileCode className="w-5 h-5" />
    },
    {
      name: "SectionStatsBanner",
      path: "StatsBanner/SectionStatsBanner.tsx",
      description: "Statistics banner with counters",
      usedIn: ["About Page (/about)"],
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      name: "SectionCertifications",
      path: "Certifications/SectionCertifications.tsx",
      description: "Certifications and credentials display",
      usedIn: ["About Page (/about)"],
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      name: "SectionContact",
      path: "Contact/SectionContact.tsx",
      description: "Contact form and information",
      usedIn: ["Contact Page (/contact)"],
      icon: <Phone className="w-5 h-5" />
    },
  ];

  const pagesUsingSections = [
    { name: "Home Page", path: "/", sectionCount: 6 },
    { name: "About Page", path: "/about", sectionCount: 4 },
    { name: "Contact Page", path: "/contact", sectionCount: 1 },
  ];

  return (
    <PageWrapper>
      <PageTitle
        title="Used Components"
        subtitle="Component Analysis"
        description="List of all sections that are currently active and used in the website"
      />

      {/* Toggle Preview Button */}
      <div className="max-w-7xl mx-auto mt-8 mb-8">
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all font-semibold"
        >
          <Eye className="w-5 h-5" />
          {showPreview ? "Hide Section Preview" : "Show Section Preview"}
        </button>
      </div>

      {/* Navigation Link */}
      <div className="max-w-7xl mx-auto mt-8 mb-8">
        <Link
          href="/unused-components"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all font-semibold"
        >
          <FileCode className="w-5 h-5" />
          View Unused Components
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Summary Stats */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 text-white p-4 rounded-full">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {usedSections.length} Active Sections
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                These sections are currently being used across {pagesUsingSections.length} pages
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pages Overview */}
      <div className="max-w-7xl mx-auto mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          📄 Pages Using Sections
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pagesUsingSections.map((page, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{page.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {page.sectionCount} sections
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Used Sections Grid */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          🧩 Active Sections
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usedSections.map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-green-200 dark:border-green-800 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {section.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {section.description}
                  </p>
                  <code className="text-xs bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                    {section.path}
                  </code>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-slate-700 pt-4 mt-4">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Used in:
                </p>
                <div className="flex flex-wrap gap-2">
                  {section.usedIn.map((page, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full"
                    >
                      {page}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            💡 Usage Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Component Utilization
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Used Sections:</span>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    {usedSections.length} ({Math.round((usedSections.length / 34) * 100)}%)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Unused Sections:</span>
                  <span className="font-bold text-red-600 dark:text-red-400">
                    {34 - usedSections.length} ({Math.round(((34 - usedSections.length) / 34) * 100)}%)
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Recommendations
              </h4>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Review unused sections for potential reuse</li>
                <li>• Remove truly unused sections to clean up codebase</li>
                <li>• Consider consolidating similar sections</li>
                <li>• Document section purposes for better maintainability</li>
                <li>• Use the Show Section Preview button above to see how these sections look</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section Previews */}
      {showPreview && (
        <div className="max-w-7xl mx-auto mt-12 space-y-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎨 Active Section Previews
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Below are the actual rendered sections that are currently being used in the website.
            </p>
          </div>

          <div className="space-y-12">
            <div className="border-2 border-dashed border-green-300 dark:border-green-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Hero2 (Used in Home Page)</h3>
              <Hero2 />
            </div>

            <div className="border-2 border-dashed border-green-300 dark:border-green-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionAbout (Used in Home Page)</h3>
              <SectionAbout />
            </div>

            <div className="border-2 border-dashed border-green-300 dark:border-green-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionSkills (Used in Home Page)</h3>
              <SectionSkills />
            </div>

            <div className="border-2 border-dashed border-green-300 dark:border-green-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Experience (Used in Home Page)</h3>
              <Experience />
            </div>

            <div className="border-2 border-dashed border-green-300 dark:border-green-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">ClientReview (Used in Home Page)</h3>
              <ClientReview />
            </div>

            <div className="border-2 border-dashed border-green-300 dark:border-green-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionCallToAction2 (Used in Home Page)</h3>
              <SectionCallToAction2 />
            </div>

            <div className="border-2 border-dashed border-green-300 dark:border-green-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionImpact (Used in About Page)</h3>
              <SectionImpact />
            </div>

            <div className="border-2 border-dashed border-green-300 dark:border-green-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionWorkHistory (Used in About Page)</h3>
              <SectionWorkHistory />
            </div>

            <div className="border-2 border-dashed border-green-300 dark:border-green-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionStatsBanner (Used in About Page)</h3>
              <SectionStatsBanner />
            </div>

            <div className="border-2 border-dashed border-green-300 dark:border-green-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionCertifications (Used in About Page)</h3>
              <SectionCertifications />
            </div>

            <div className="border-2 border-dashed border-green-300 dark:border-green-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionContact (Used in Contact Page)</h3>
              <SectionContact />
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default UsedComponentsPage;
