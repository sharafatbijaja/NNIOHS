"use client";
import SectionCertifications from "@/components/sections/Certifications/SectionCertifications";
import SectionWorkHistory from "@/components/sections/WorkHistory/SectionWorkHistory";
import SectionImpact from "@/components/sections/Impact/SectionImpact";
import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import SectionStatsBanner from "@/components/sections/StatsBanner/SectionStatsBanner";
import SectionAchievements from "@/components/sections/Achievements/SectionAchievements";
import SectionTeam from "@/components/sections/Team/SectionTeam";
import SectionWhyChooseUs from "@/components/sections/WhyChooseUs/SectionWhyChooseUs";

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        // title="About Me"
        title="About Ikhlas Institute of Nursing"
        subtitle="Get To Know"
        // description="Learn more about my background, skills, and professional journey"
        description="Shaping Compassionate & Competent Nurses Since 2017"
      />
      <SectionImpact />
      <SectionWorkHistory />
        <SectionStatsBanner />
      <SectionCertifications />
    
    </PageWrapper>
  );
};

export default AboutPage;
