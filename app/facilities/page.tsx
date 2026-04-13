"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import SectionHeading from "@/components/common/SectionHeading";
import { 
  Building2, 
  Microscope, 
  BookOpen, 
  Monitor, 
  GraduationCap, 
  Bus,
  BedDouble,
  FlaskConical,
  Wifi,
  Shield,
  Users,
  MapPin
} from "lucide-react";

/**
 * Facilities & Infrastructure Page
 * Showcases all facilities and infrastructure available at NNIOHS
 */
const FacilitiesPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Facilities & Infrastructure"
        subtitle="World-Class Learning Environment"
        description="Explore our state-of-the-art facilities designed to provide the best learning experience for nursing students"
      />

      {/* Campus Overview */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Campus"
          title2="Overview"
          description="Modern infrastructure spanning across a spacious campus with all essential facilities"
        />
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-blue-100 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Prime Location</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Strategically located in Karachi with easy access</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Secure Campus</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">24/7 security with CCTV surveillance</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                <Wifi className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">High-Speed Internet</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Free Wi-Fi throughout the campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nursing Skills Lab */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Nursing Skills"
          title2="Lab"
          description="Advanced simulation lab for hands-on nursing practice"
        />
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">State-of-the-Art Equipment</h3>
              <ul className="space-y-3">
                {[
                  "Advanced patient simulators",
                  "Modern hospital beds and equipment",
                  "IV practice arms and models",
                  "CPR mannequins for training",
                  "Wound care simulation kits",
                  "Medication administration stations"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Training Features</h3>
              <ul className="space-y-3">
                {[
                  "Realistic clinical scenarios",
                  "Video recording and playback",
                  "Debriefing rooms for feedback",
                  "Small group practice sessions",
                  "Expert supervision and guidance",
                  "OSCE examination preparation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy & Physiology Lab */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Anatomy & Physiology"
          title2="Lab"
          description="Well-equipped laboratory for understanding human body systems"
        />
        <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-purple-100 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Anatomical Models",
                items: ["Skeletal system models", "Organ models", "Muscular system", "Nervous system"]
              },
              {
                title: "Specimens & Charts",
                items: ["Preserved specimens", "Anatomical charts", "3D解剖 models", "Reference materials"]
              },
              {
                title: "Equipment",
                items: ["Microscopes", "Dissection tools", "Lab safety equipment", "Digital displays"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library & Computer Lab */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Library & Computer"
          title2="Lab"
          description="Comprehensive learning resources and modern computing facilities"
        />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Library</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Extensive nursing and medical book collection",
                "International nursing journals and magazines",
                "Digital library with e-books and research papers",
                "Quiet study areas and reading rooms",
                "Reference section for exam preparation",
                "Online database access"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                <Monitor className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Computer Lab</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Modern computers with latest specifications",
                "High-speed internet connectivity",
                "Nursing software and simulation programs",
                "Research and assignment support",
                "Multimedia learning resources",
                "Printing and scanning facilities"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Smart Classrooms */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Smart"
          title2="Classrooms"
          description="Technology-enabled learning spaces for interactive education"
        />
        <div className="mt-8 bg-gradient-to-br from-green-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-green-100 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Digital Displays",
                description: "Interactive smart boards and projectors"
              },
              {
                icon: <Wifi className="w-8 h-8" />,
                title: "Connected Learning",
                description: "Wi-Fi enabled for online resources"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Comfortable Seating",
                description: "Ergonomic furniture for long sessions"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Climate Control",
                description: "Air-conditioned classrooms"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel Facility */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Hostel Facility"
          title2="(Boys & Girls)"
          description="Safe and comfortable accommodation for out-of-town students"
        />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-pink-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-xl">
                <GraduationCap className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Girls Hostel</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Secure and safe environment",
                "Spacious rooms with proper ventilation",
                "Attached bathrooms",
                "24/7 warden supervision",
                "Study rooms and common areas",
                "Nutritious meal service"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-blue-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Boys Hostel</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Well-maintained facilities",
                "Comfortable living spaces",
                "Recreation and sports facilities",
                "Round-the-clock security",
                "Quiet study environment",
                "Laundry and dining services"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Transport Facility */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Transport"
          title2="Facility"
          description="Convenient transportation service for students and staff"
        />
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Bus Routes",
                description: "Multiple routes covering major areas of Karachi",
                icon: <MapPin className="w-6 h-6" />
              },
              {
                title: "Comfortable Vehicles",
                description: "Well-maintained, air-conditioned buses",
                icon: <Bus className="w-6 h-6" />
              },
              {
                title: "Safety First",
                description: "Experienced drivers and regular maintenance",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Affordable Rates",
                description: "Reasonable monthly transport charges",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Timely Service",
                description: "Punctual pickup and drop-off schedules",
                icon: <Monitor className="w-6 h-6" />
              },
              {
                title: "GPS Tracking",
                description: "Real-time tracking for parents' peace of mind",
                icon: <Wifi className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default FacilitiesPage;
