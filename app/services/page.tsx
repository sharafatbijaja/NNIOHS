"use client";

import { Services } from "@/Constant/Constant";
import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServicesPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Services"
        subtitle="What I Offer"
        description="Professional web development and digital solutions tailored to your needs"
      />

      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{service.icon}</div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
                {service.features.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    +{service.features.length - 3} more
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Need a Custom Solution?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We can tailor our services to meet your specific requirements. Let's discuss your project.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold"
        >
          Get in Touch
        </Link>
      </div>
    </PageWrapper>
  );
};

export default ServicesPage;
