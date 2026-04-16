"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";

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

const MiscPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="MISC Sections"
        subtitle="Unused Components"
        description="All unused sections rendered for preview and evaluation"
      />

      <div className="max-w-7xl mx-auto mt-12 space-y-16">
        {/* Section 1 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            1. SectionAchievements
          </h2>
          <SectionAchievements />
        </div>

        {/* Section 2 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            2. SectionBlogPreview
          </h2>
          <SectionBlogPreview />
        </div>

        {/* Section 3 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            3. SectionCallToAction
          </h2>
          <SectionCallToAction />
        </div>

        {/* Section 4 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            4. SectionCapabilities
          </h2>
          <SectionCapabilities />
        </div>

        {/* Section 5 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            5. SectionCareers
          </h2>
          <SectionCareers />
        </div>

        {/* Section 6 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            6. SectionContactInfo
          </h2>
          <SectionContactInfo />
        </div>

        {/* Section 7 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            7. SectionFAQ
          </h2>
          <SectionFAQ />
        </div>

        {/* Section 8 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            8. Hero
          </h2>
          <Hero />
        </div>

        {/* Section 9 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            9. SectionMaintained
          </h2>
          <SectionMaintained />
        </div>

        {/* Section 10 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            10. SectionNewsletter
          </h2>
          <SectionNewsletter />
        </div>

        {/* Section 11 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            11. SectionOfferings
          </h2>
          <SectionOfferings />
        </div>

        {/* Section 12 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            12. SectionPartners
          </h2>
          <SectionPartners />
        </div>

        {/* Section 13 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            13. SectionPricing
          </h2>
          <SectionPricing />
        </div>

        {/* Section 14 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            14. SectionPricingCards
          </h2>
          <SectionPricingCards />
        </div>

        {/* Section 15 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            15. SectionProcess
          </h2>
          <SectionProcess />
        </div>

        {/* Section 16 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            16. SectionServicesOverview
          </h2>
          <SectionServicesOverview />
        </div>

        {/* Section 17 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            17. SectionStatsBanner
          </h2>
          <SectionStatsBanner />
        </div>

        {/* Section 18 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            18. SectionTeam
          </h2>
          <SectionTeam />
        </div>

        {/* Section 19 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            19. SectionTechnologies
          </h2>
          <SectionTechnologies />
        </div>

        {/* Section 20 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            20. SectionTestimonials
          </h2>
          <SectionTestimonials />
        </div>

        {/* Section 21 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            21. SectionToolkit
          </h2>
          <SectionToolkit />
        </div>

        {/* Section 22 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            22. SectionVideoShowcase
          </h2>
          <SectionVideoShowcase />
        </div>

        {/* Section 23 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            23. SectionWhyChooseUs
          </h2>
          <SectionWhyChooseUs />
        </div>

        {/* Section 24 */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            24. Project
          </h2>
          <Project />
        </div>
      </div>
    </PageWrapper>
  );
};

export default MiscPage;
