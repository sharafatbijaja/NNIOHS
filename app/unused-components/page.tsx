"use client";

import React from "react";
import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { ArrowRight, XCircle, FileCode, AlertTriangle, Eye } from "lucide-react";

// Import all unused sections
import SectionAchievements from "@/components/sections/Achievements/SectionAchievements";
import SectionBlogPreview from "@/components/sections/BlogPreview/SectionBlogPreview";
import SectionCallToAction from "@/components/sections/CallToAction/SectionCallToAction";
import SectionCapabilities from "@/components/sections/Capabilities/SectionCapabilities";
import SectionCareers from "@/components/sections/Careers/SectionCareers";
import SectionContactInfo from "@/components/sections/ContactInfo/SectionContactInfo";
import SectionFAQ from "@/components/sections/FAQ/SectionFAQ";
import Hero from "@/components/sections/Hero/Hero";
import SectionMaintained from "@/components/sections/Maintained/SectionMaintained";
import SectionNewsletter from "@/components/sections/Newsletter/SectionNewsletter";
import SectionOfferings from "@/components/sections/Offerings/SectionOfferings";
import SectionPartners from "@/components/sections/Partners/SectionPartners";
import SectionPricing from "@/components/sections/Pricing/SectionPricing";
import SectionPricingCards from "@/components/sections/PricingCards/SectionPricingCards";
import SectionProcess from "@/components/sections/Process/SectionProcess";
import SectionServicesOverview from "@/components/sections/ServicesOverview/SectionServicesOverview";
import SectionStatsBanner from "@/components/sections/StatsBanner/SectionStatsBanner";
import SectionTeam from "@/components/sections/Team/SectionTeam";
import SectionTechnologies from "@/components/sections/Technologies/SectionTechnologies";
import SectionTestimonials from "@/components/sections/Testimonials/SectionTestimonials";
import SectionToolkit from "@/components/sections/Toolkit/SectionToolkit";
import SectionVideoShowcase from "@/components/sections/VideoShowcase/SectionVideoShowcase";
import SectionWhyChooseUs from "@/components/sections/WhyChooseUs/SectionWhyChooseUs";
import Project from "@/components/sections/Project/Project";

const UnusedComponentsPage = () => {
  const [showPreview, setShowPreview] = React.useState(false);

  const unusedSections = [
    { name: "SectionAchievements", path: "Achievements/SectionAchievements.tsx", description: "Achievements showcase section" },
    { name: "SectionBlogPreview", path: "BlogPreview/SectionBlogPreview.tsx", description: "Blog preview section" },
    { name: "SectionCallToAction", path: "CallToAction/SectionCallToAction.tsx", description: "Call to action section (variant 1)" },
    { name: "SectionCapabilities", path: "Capabilities/SectionCapabilities.tsx", description: "Capabilities showcase section" },
    { name: "SectionCareers", path: "Careers/SectionCareers.tsx", description: "Careers/jobs section" },
    { name: "SectionContactInfo", path: "ContactInfo/SectionContactInfo.tsx", description: "Contact information section" },
    { name: "SectionFAQ", path: "FAQ/SectionFAQ.tsx", description: "Frequently asked questions section" },
    { name: "Hero", path: "Hero/Hero.tsx", description: "Hero section (variant 1)" },
    { name: "SectionMaintained", path: "Maintained/SectionMaintained.tsx", description: "Maintained projects section" },
    { name: "SectionNewsletter", path: "Newsletter/SectionNewsletter.tsx", description: "Newsletter subscription section" },
    { name: "SectionOfferings", path: "Offerings/SectionOfferings.tsx", description: "Offerings/services section" },
    { name: "SectionPartners", path: "Partners/SectionPartners.tsx", description: "Partners/clients section" },
    { name: "SectionPricing", path: "Pricing/SectionPricing.tsx", description: "Pricing plans section" },
    { name: "SectionPricingCards", path: "PricingCards/SectionPricingCards.tsx", description: "Pricing cards section" },
    { name: "SectionProcess", path: "Process/SectionProcess.tsx", description: "Process/workflow section" },
    { name: "SectionServicesOverview", path: "ServicesOverview/SectionServicesOverview.tsx", description: "Services overview section" },
    { name: "SectionStatsBanner", path: "StatsBanner/SectionStatsBanner.tsx", description: "Statistics banner section" },
    { name: "SectionTeam", path: "Team/SectionTeam.tsx", description: "Team members section" },
    { name: "SectionTechnologies", path: "Technologies/SectionTechnologies.tsx", description: "Technologies stack section" },
    { name: "SectionTestimonials", path: "Testimonials/SectionTestimonials.tsx", description: "Testimonials/reviews section" },
    { name: "SectionToolkit", path: "Toolkit/SectionToolkit.tsx", description: "Toolkit/tools section" },
    { name: "SectionVideoShowcase", path: "VideoShowcase/SectionVideoShowcase.tsx", description: "Video showcase section" },
    { name: "SectionWhyChooseUs", path: "WhyChooseUs/SectionWhyChooseUs.tsx", description: "Why choose us section" },
    { name: "Project", path: "Project/Project.tsx", description: "Projects showcase section" },
  ];

  return (
    <PageWrapper>
      <PageTitle
        title="Unused Components"
        subtitle="Component Analysis"
        description="List of all sections that are currently not used anywhere in the website"
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
          href="/used-components"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all font-semibold"
        >
          <FileCode className="w-5 h-5" />
          View Used Components
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Summary Stats */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-red-200 dark:border-red-800">
          <div className="flex items-center gap-4">
            <div className="bg-red-500 text-white p-4 rounded-full">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {unusedSections.length} Unused Sections Found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                These sections exist in the codebase but are not imported or used in any page
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Unused Sections Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unusedSections.map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-red-200 dark:border-red-800 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
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
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            💡 Information
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• These sections are taking up storage space but not contributing to the website</li>
            <li>• Consider removing unused sections to clean up the codebase</li>
            <li>• Some sections might be useful for future features - review before deletion</li>
            <li>• Check if any section can be reused in existing pages</li>
            <li>• Use the Show Section Preview button above to see how these sections look</li>
          </ul>
        </div>
      </div>

      {/* Section Previews */}
      {showPreview && (
        <div className="max-w-7xl mx-auto mt-12 space-y-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎨 Section Previews
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Below are the actual rendered sections. You can see how they look and decide if any should be used.
            </p>
          </div>

          <div className="space-y-12">
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionAchievements</h3>
              <SectionAchievements />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionBlogPreview</h3>
              <SectionBlogPreview />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionCallToAction</h3>
              <SectionCallToAction />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionCapabilities</h3>
              <SectionCapabilities />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionCareers</h3>
              <SectionCareers />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionContactInfo</h3>
              <SectionContactInfo />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionFAQ</h3>
              <SectionFAQ />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Hero</h3>
              <Hero />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionMaintained</h3>
              <SectionMaintained />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionNewsletter</h3>
              <SectionNewsletter />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionOfferings</h3>
              <SectionOfferings />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionPartners</h3>
              <SectionPartners />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionPricing</h3>
              <SectionPricing />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionPricingCards</h3>
              <SectionPricingCards />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionProcess</h3>
              <SectionProcess />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionServicesOverview</h3>
              <SectionServicesOverview />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionStatsBanner</h3>
              <SectionStatsBanner />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionTeam</h3>
              <SectionTeam />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionTechnologies</h3>
              <SectionTechnologies />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionTestimonials</h3>
              <SectionTestimonials />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionToolkit</h3>
              <SectionToolkit />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionVideoShowcase</h3>
              <SectionVideoShowcase />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SectionWhyChooseUs</h3>
              <SectionWhyChooseUs />
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Project</h3>
              <Project />
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default UnusedComponentsPage;
