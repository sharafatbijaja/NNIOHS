import React from "react";
import { Building2, Globe, Star, TrendingUp } from "lucide-react";

/**
 * Partners Section Component
 * Displays partner/client logos and testimonials
 * Can be used on Home, About, or Services pages
 */
const SectionPartners = () => {
  const partners = [
    { name: "TechCorp", logo: "TC", color: "from-blue-500 to-blue-600" },
    { name: "InnovateLabs", logo: "IL", color: "from-purple-500 to-purple-600" },
    { name: "DataFlow", logo: "DF", color: "from-green-500 to-green-600" },
    { name: "CloudNine", logo: "CN", color: "from-orange-500 to-orange-600" },
    { name: "NextGen", logo: "NG", color: "from-pink-500 to-pink-600" },
    { name: "SmartSolutions", logo: "SS", color: "from-cyan-500 to-cyan-600" },
  ];

  const stats = [
    { icon: Building2, value: "500+", label: "Happy Clients" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We've had the privilege of working with amazing companies worldwide
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-8 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform`}>
                {partner.logo}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl text-primary/30 mb-6">&ldquo;</div>
            <p className="text-xl md:text-2xl text-gray-900 dark:text-white mb-6 leading-relaxed">
              Working with this team has been an absolute pleasure. Their expertise, professionalism, and dedication to delivering quality results exceeded all our expectations.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">
                  John Doe
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  CEO, TechCorp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPartners;
