"use client";

import Hero2 from '@/components/sections/Hero2/Hero2'
// import Hero from '@/components/sections/Hero/Hero'
import Project from '@/components/sections/Project/Project'
import ClientReview from '@/components/sections/ClientReview/ClientReview'
import SectionServicesOverview from '@/components/sections/ServicesOverview/SectionServicesOverview'
import SectionStatsBanner from '@/components/sections/StatsBanner/SectionStatsBanner'
import CTA from '@/components/common/CTA'
import PageWrapper from '@/components/common/PageWrapper'
import { Rocket } from 'lucide-react'
import { About, Experience } from '@/components/sections';
import SectionSkills from '@/components/sections/Skills/SectionSkills';
import SectionImpact from '@/components/sections/Impact/SectionImpact';
import SectionMaintained from '@/components/sections/Maintained/SectionMaintained';
import SectionWorkHistory from '@/components/sections/WorkHistory/SectionWorkHistory';
import SectionCertifications from '@/components/sections/Certifications/SectionCertifications';
import SectionCallToAction2 from '@/components/sections/CallToAction/SectionCallToAction2';

const HomePage = () => {
  return (
    <PageWrapper>
      {/* <Hero /> */}
      <Hero2 />
      <About />
      <SectionSkills />
      <Experience />
      <ClientReview />
      <SectionCallToAction2 />
      {/* <SectionCertifications /> */}
      {/* <SectionWorkHistory /> */}
      {/* <SectionMaintained /> */}
      {/* <SectionImpact /> */}
      {/* <SectionServicesOverview /> */}
      {/* <SectionStatsBanner /> */}
      {/* <Project /> */}
    </PageWrapper>
  )
}

export default HomePage
