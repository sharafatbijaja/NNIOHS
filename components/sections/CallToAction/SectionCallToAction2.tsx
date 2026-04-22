import React from "react";
import CTA from "@/components/common/CTA";
import { Rocket } from "lucide-react";

const SectionCallToAction2 = () => {
  return (
    <section className="bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cta-hero-bg cta-hero-glow relative overflow-hidden rounded-3xl">
          <div className="cta-hero-orb-1"></div>
          <div className="cta-hero-orb-2"></div>
          <div className="cta-hero-shimmer"></div>
          <div className="cta-hero-grid"></div>
          <div className="relative z-10">
            <CTA
              title="Apply Online"
              description="Let's work together to bring your vision to life. Get in touch with our team today for BSN and CNA program applications."
              buttonText="Apply BSN ss"
              buttonLink="/"
              variant="primary"
              size="large"
              icon={<Rocket className="w-8 h-8" />}
              secondaryButton={{
                text: "Apply CNA",
                link: "/",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCallToAction2;
