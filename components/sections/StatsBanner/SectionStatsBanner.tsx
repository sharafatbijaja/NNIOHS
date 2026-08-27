import React from "react";
import { Users, GraduationCap, Award, Heart, Bed, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
/**
 * Stats Banner Section Component
 * Displays key statistics for Ikhlas Institute of Nursing
 */
const SectionStatsBanner = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Students Trained",
      description: "Graduates across Pakistan",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      value: "100%",
      label: "Pass Rate",
      description: "Board exam success",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Bed,
      value: "1000+",
      label: "Clinical Beds",
      description: "Hospital training access",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Award,
      value: "PNMC",
      label: "Certified",
      description: "National recognition",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      value: "DUHS",
      label: "Affiliated",
      description: "University partnership",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      value: "8+",
      label: "Years",
      description: "Serving since 2017",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section className="relative">

      <div className="container mx-auto px-4">
        {/* Section title - "About Me" */}
        <SectionHeading
          title1="Stats That"
          title2="Define Us"
          description="Key metrics that showcase our commitment to excellence in nursing education"
        />
      </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-primary/10 rounded-2xl p-4 text-center hover:bg-primary/20 dark:hover:bg-primary/20 hover:scale-105 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${stat.color} rounded-full mb-3 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Value */}
                <div className="text-xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xs font-semibold text-foreground mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-[10px] text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="text-yellow-500">★</div>
              ))}
            </div>
            <span className="text-xs font-medium">5/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="animate-ping w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-xs font-medium">PNMC Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="animate-ping w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-xs font-medium">DUHS Affiliated</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionStatsBanner;