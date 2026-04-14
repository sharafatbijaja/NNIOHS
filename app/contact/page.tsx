"use client";

import ContactSection from '@/components/sections/Contact/SectionContact'
import PageWrapper from '@/components/common/PageWrapper'
import PageTitle from '@/components/common/PageTitle'

const ContactPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Contact"
        subtitle="Get In Touch"
        description="Let's discuss your project and bring your ideas to life"
      />
      <ContactSection />
    </PageWrapper>
  )
}

export default ContactPage
