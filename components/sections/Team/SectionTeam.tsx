import React from "react";
import { Mail, Quote } from "lucide-react";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa6";
import SectionHeading from "@/components/common/SectionHeading";

/**
 * Team Section Component
 * Displays the Principal's message for Ikhlas Institute of Nursing
 */
const SectionTeam = () => {
  const teamMembers = [
    {
      name: "Madam Fatima",
      role: "Principal",
      image: "/images/user.jpg",
      bio: "Nursing is more than a profession — it is a sacred responsibility to care for humanity in its most vulnerable moments. At Ikhlas Institute of Nursing, we don't just teach nursing skills; we nurture caring hearts, sharp minds, and strong characters.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        email: "mailto:info@ikhlasedu.com",
      },
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
             Message
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet our visionary leader dedicated to shaping compassionate nursing professionals
          </p>
        </div> */}
        <div className="container mx-auto px-4">
          {/* Section title - "About Me" */}
          <SectionHeading
            title1="Principal's"
            title2="Message"
            description="Meet our leader dedicated to compassionate nursing professionals"
          />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700"
            >
              {/* Member Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <FaLinkedinIn className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <FaFacebookF className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={member.social.email}
                      className="p-2 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Quote className="h-8 w-8" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
                "Our goal is to prepare a new generation of nurses who will serve with competence, compassion, and confidence. I warmly welcome all aspiring students who wish to join this noble field and make a meaningful difference in society."
              </p>
              <p className="text-sm font-semibold text-primary">
                — Madam Fatima, Principal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;
