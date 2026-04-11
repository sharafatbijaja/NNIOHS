import React from "react";
import { Code2, Database, Cloud, Smartphone, Palette, Shield, Globe, Zap } from "lucide-react";

/**
 * Technologies Section Component
 * Displays technology stack and tools used
 * Can be used on About or Services pages
 */
const SectionTechnologies = () => {
  const techCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      technologies: [
        { name: "Next.js", level: 95 },
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      icon: Database,
      technologies: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 87 },
        { name: "GraphQL", level: 82 },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      technologies: [
        { name: "AWS", level: 88 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "CI/CD", level: 87 },
        { name: "Azure", level: 82 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      technologies: [
        { name: "React Native", level: 90 },
        { name: "Flutter", level: 85 },
        { name: "iOS", level: 82 },
        { name: "Android", level: 83 },
        { name: "Expo", level: 88 },
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      technologies: [
        { name: "Figma", level: 92 },
        { name: "Adobe XD", level: 85 },
        { name: "Sketch", level: 80 },
        { name: "Photoshop", level: 88 },
        { name: "Illustrator", level: 85 },
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Security & Performance",
      icon: Shield,
      technologies: [
        { name: "OAuth", level: 90 },
        { name: "JWT", level: 88 },
        { name: "SSL/TLS", level: 95 },
        { name: "Performance", level: 92 },
        { name: "SEO", level: 90 },
      ],
      color: "from-indigo-500 to-violet-500",
    },
  ];

  const tools = [
    { name: "Git", icon: Globe },
    { name: "VS Code", icon: Code2 },
    { name: "Postman", icon: Zap },
    { name: "Jira", icon: Shield },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust, scalable, and secure solutions
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {tech.name}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools Section */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Tools & Platforms We Use
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTechnologies;
