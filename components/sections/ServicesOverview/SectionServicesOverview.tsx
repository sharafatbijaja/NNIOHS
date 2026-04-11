import React from "react";
import { ArrowRight, Code2, Smartphone, Palette, Search, Globe, Zap } from "lucide-react";
import Link from "next/link";

/**
 * Services Overview Section Component
 * Displays all services with icons and descriptions
 * Can be used on Home or Services page
 */
const SectionServicesOverview = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
      link: "/services/web-development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android with stunning interfaces.",
      features: ["iOS & Android", "Cross-Platform", "User-Friendly", "High Performance"],
      link: "/services/mobile-app-development",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive designs that create engaging user experiences and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      link: "/services/ui-ux-design",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive organic traffic.",
      features: ["Keyword Research", "On-Page SEO", "Content Marketing", "Analytics"],
      link: "/services/seo",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to power your applications with reliability.",
      features: ["AWS/Azure/GCP", "Scalable", "Secure", "Cost-Effective"],
      link: "/services/cloud-solutions",
      color: "from-indigo-500 to-violet-500",
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Cutting-edge AI solutions to automate processes and enhance user experiences.",
      features: ["Machine Learning", "NLP", "Chatbots", "Automation"],
      link: "/services/ai-apps-development",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to help your business grow and succeed in the digital world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-slate-700 hover:border-primary/50 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="text-xs px-3 py-1 bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-foreground rounded-full border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need a custom solution?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all transform hover:-translate-y-1"
          >
            Get a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionServicesOverview;
