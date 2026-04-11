import React from "react";
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

/**
 * Careers Section Component
 * Displays job openings and company culture
 * Can be used on dedicated Careers page or About page
 */
const SectionCareers = () => {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      posted: "2 days ago",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Dubai, UAE",
      type: "Full-time",
      salary: "$60,000 - $90,000",
      posted: "5 days ago",
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$50,000 - $75,000",
      posted: "1 week ago",
    },
  ];

  const benefits = [
    { icon: DollarSign, title: "Competitive Salary", description: "Market-leading compensation packages" },
    { icon: Clock, title: "Flexible Hours", description: "Work-life balance priority" },
    { icon: Heart, title: "Health Benefits", description: "Comprehensive medical coverage" },
    { icon: Briefcase, title: "Growth Opportunities", description: "Career development programs" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Build your career with a team that values innovation, creativity, and growth
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Job Openings */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Current Openings
          </h3>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Posted {job.posted}
                    </div>
                    <div className="font-semibold text-primary">
                      {job.salary}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Don't see a role that fits?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            Send Us Your Resume
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionCareers;
