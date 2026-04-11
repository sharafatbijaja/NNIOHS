import React from "react";
import { ArrowRight, CheckCircle, Clock, Rocket, Target, Zap } from "lucide-react";

/**
 * Process Section Component
 * Displays the workflow/process steps with icons and descriptions
 * Can be used on Services or About pages
 */
const SectionProcess = () => {
  const processSteps = [
    {
      icon: Target,
      title: "Discovery",
      description: "We analyze your requirements, goals, and target audience to create a solid foundation for your project.",
      duration: "1-2 weeks",
    },
    {
      icon: Zap,
      title: "Planning",
      description: "Our team creates a detailed project plan, including wireframes, sitemaps, and technical specifications.",
      duration: "1-2 weeks",
    },
    {
      icon: Rocket,
      title: "Development",
      description: "We build your solution using cutting-edge technologies, following best practices and coding standards.",
      duration: "4-8 weeks",
    },
    {
      icon: CheckCircle,
      title: "Testing",
      description: "Rigorous quality assurance to ensure your product is bug-free, performant, and user-friendly.",
      duration: "1-2 weeks",
    },
    {
      icon: Clock,
      title: "Deployment",
      description: "We launch your product and provide ongoing support, maintenance, and updates as needed.",
      duration: "1 week",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent transform -translate-x-1/2" />

          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full items-center justify-center font-bold text-lg shadow-lg z-10">
                    {index + 1}
                  </div>

                  {/* Step Content */}
                  <div className={`flex-1 ${isEven ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                    <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                      {/* Mobile Step Number */}
                      <div className="lg:hidden flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary text-white rounded-full items-center justify-center font-bold text-lg flex">
                          {index + 1}
                        </div>
                        <Icon className="w-8 h-8 text-primary" />
                      </div>

                      {/* Desktop Icon */}
                      <div className="hidden lg:flex items-center gap-4 mb-4">
                        <div className={`p-3 bg-primary/10 rounded-xl ${isEven ? "ml-auto" : ""}`}>
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Empty Space for Desktop Layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all cursor-pointer">
            <span>Ready to start your project?</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProcess;
