import React from "react";
import { Award, Shield, Zap, Users, Heart, CheckCircle2 } from "lucide-react";

/**
 * Why Choose Us Section Component
 * Displays key benefits for Ikhlas Institute of Nursing
 */
const benefits = [
  {
    icon: Award,
    title: "Modern Laboratories",
    description: "State-of-the-art nursing skills and science labs for hands-on practical training.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Clinical Training",
    description: "Hands-on training at Dr. Ruth K.M. Pfau Civil Hospital, one of Karachi's largest government hospitals.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Expert Faculty",
    description: "Highly qualified and experienced faculty dedicated to nursing education excellence.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: CheckCircle2,
    title: "Affordable Fees",
    description: "Quality nursing education at an affordable fee structure for all students.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Hostel & Transport",
    description: "Separate hostel and transport facilities available for both male and female students.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Supportive Environment",
    description: "Nurturing environment that fosters academic and personal growth for all students.",
    color: "from-indigo-500 to-violet-500",
  },
];

const SectionWhyChooseUs = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Ikhlas Institute of Nursing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for aspiring nursing professionals
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700 hover:border-transparent"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${benefit.color} rounded-full group-hover:w-full transition-all duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                500+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Students Trained
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                8+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years Excellence
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                PNMC Certified
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Clinical Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhyChooseUs;
