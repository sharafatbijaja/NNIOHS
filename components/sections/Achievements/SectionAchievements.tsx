import React from "react";
import { Users, GraduationCap, Award, Heart, Bed, TrendingUp } from "lucide-react";

/**
 * Achievements Section Component
 * Displays achievements and milestones for Naz Nursing Institute
 */
const SectionAchievements = () => {
  const achievements = [
    {
      icon: Users,
      title: "Students Trained",
      value: "500+",
      description: "Graduates serving across Pakistan's healthcare sector",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Programs Offered",
      value: "3+",
      description: "BS Nursing, Post RN, and specialty programs",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "National Recognition",
      value: "100%",
      description: "PNMC certified and DUHS affiliated",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Clinical Partners",
      value: "5+",
      description: "Major hospitals for hands-on training",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Bed,
      title: "Hospital Beds Access",
      value: "1000+",
      description: "Clinical exposure at Dr. Ruth Pfau Civil Hospital",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Years Excellence",
      value: "8+",
      description: "Serving Karachi since 2017",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  const milestones = [
    { year: "2017", title: "Institute Founded", description: "Established by Waseem Welfare Trust" },
    { year: "2018", title: "DUHS Affiliation", description: "Affiliated with Dow University" },
    { year: "2019", title: "PNMC Recognition", description: "Recognized by Pakistan Nursing Council" },
    { year: "2020", title: "Sindh Board Approval", description: "Approved by Sindh Nursing Board" },
    { year: "2025", title: "Growing Reputation", description: "Excellence in nursing education" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Celebrating milestones in nursing education and healthcare training excellence
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700 hover:border-transparent"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.value}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative text-center group"
              >
                {/* Year Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-bold text-lg mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {milestone.year}
                </div>

                {/* Content */}
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {milestone.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {milestone.description}
                </p>

                {/* Connector Line */}
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAchievements;
