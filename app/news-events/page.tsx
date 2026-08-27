"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import SectionHeading from "@/components/common/SectionHeading";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users,
  Megaphone,
  Trophy,
  GraduationCap,
  BookOpen,
  ChevronRight,
  Star,
  CheckCircle
} from "lucide-react";

/**
 * News & Events Page
 * Showcases latest announcements, upcoming events, past events, and celebrations
 */
const NewsEventsPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="News & Events"
        subtitle="Stay Updated"
        description="Latest announcements, upcoming events, and news from Ikhlas Institute of Nursing"
      />

      {/* Latest Announcements */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Latest"
          title2="Announcements"
          description="Important updates and notifications for students and faculty"
        />
        <div className="mt-8 space-y-4">
          {[
            {
              title: "Admissions Open for Session 2026",
              date: "April 2026",
              description: "Admissions are now open for BSN and CNA programs. Apply before the deadline to secure your seat.",
              type: "Admission",
              urgent: true
            },
            {
              title: "Summer Semester Schedule Released",
              date: "March 2026",
              description: "The complete schedule for summer semester has been published. Check student portal for details.",
              type: "Academic",
              urgent: false
            },
            {
              title: "New Clinical Rotation Partnership",
              date: "March 2026",
              description: "Ikhlas Institute of Nursing provides practical clinical training through affiliated hospitals.",
              type: "Partnership",
              urgent: false
            },
            {
              title: "Faculty Development Workshop",
              date: "February 2026",
              description: "Upcoming workshop on modern teaching methodologies for nursing education.",
              type: "Workshop",
              urgent: false
            }
          ].map((announcement, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Megaphone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">{announcement.title}</h3>
                    {announcement.urgent && (
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-semibold rounded-full">
                        Urgent
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{announcement.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {announcement.date}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded-full">
                      {announcement.type}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Upcoming"
          title2="Events"
          description="Mark your calendars for these exciting events"
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "International Nurses Day 2026",
              date: "May 12, 2026",
              time: "10:00 AM - 4:00 PM",
              location: "Main Auditorium",
              description: "Join us in celebrating the dedication and hard work of nurses worldwide.",
              icon: <Trophy className="w-8 h-8" />,
              color: "blue"
            },
            {
              title: "Annual Sports Day",
              date: "April 25, 2026",
              time: "9:00 AM - 5:00 PM",
              location: "Sports Ground",
              description: "Showcase your athletic talents and compete in various sports events.",
              icon: <Users className="w-8 h-8" />,
              color: "green"
            },
            {
              title: "Research Symposium",
              date: "May 5, 2026",
              time: "11:00 AM - 3:00 PM",
              location: "Conference Hall",
              description: "Present your research findings and learn from industry experts.",
              icon: <BookOpen className="w-8 h-8" />,
              color: "purple"
            }
          ].map((event, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className={`bg-${event.color}-100 dark:bg-${event.color}-900/30 p-4 rounded-xl mb-4 text-${event.color}-600 dark:text-${event.color}-400`}>
                {event.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">{event.title}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Past"
          title2="Events"
          description="Memorable moments from our recent events"
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Graduation Ceremony 2025",
              date: "December 2025",
              description: "Celebrating the success of our BSN and CNA graduates who are now ready to serve the healthcare community.",
              attendees: "150+ Graduates",
              highlights: ["Keynote speech by renowned healthcare leader", "Awards for academic excellence", "Cultural performances"]
            },
            {
              title: "Health Awareness Camp",
              date: "November 2025",
              description: "Free health checkup camp organized by our students for the local community.",
              attendees: "500+ Beneficiaries",
              highlights: ["Blood pressure screening", "Diabetes testing", "Health education sessions"]
            }
          ].map((event, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-200 dark:bg-slate-700 p-3 rounded-xl">
                  <Star className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{event.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{event.attendees}</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Highlights:</h4>
                <ul className="space-y-1">
                  {event.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* International Nurses Day Celebrations */}
      <section className="container mx-auto">
        <SectionHeading
          title1="International Nurses Day"
          title2="Celebrations"
          description="Honoring our nursing professionals on May 12th"
        />
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-blue-100 dark:border-slate-700 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Celebrating Nursing Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Every year on May 12th, Ikhlas Institute of Nursing celebrates International Nurses Day to honor the birth anniversary of Florence Nightingale, the founder of modern nursing. This day is dedicated to recognizing the invaluable contributions of nurses to healthcare.
              </p>
              <div className="space-y-4">
                {[
                  "Award ceremony for outstanding nurses",
                  "Guest lectures by healthcare leaders",
                  "Cultural programs and performances",
                  "Community health awareness activities",
                  "Networking sessions with alumni"
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Past Celebrations</h4>
              <div className="space-y-4">
                {[
                  {
                    year: "2025",
                    theme: "Nurses: A Voice to Lead",
                    attendees: "300+"
                  },
                  {
                    year: "2024",
                    theme: "Our Nurses. Our Future.",
                    attendees: "250+"
                  },
                  {
                    year: "2023",
                    theme: "Invest in Nursing, Respect Rights",
                    attendees: "200+"
                  }
                ].map((celebration, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{celebration.year}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{celebration.theme}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{celebration.attendees} attendees</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Seminars */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Workshops"
          title2="& Seminars"
          description="Continuous learning opportunities for students and faculty"
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Advanced Cardiac Life Support",
              date: "Upcoming",
              duration: "2 Days",
              description: "ACLS certification workshop for nursing students and professionals.",
              level: "Advanced"
            },
            {
              title: "Pediatric Nursing Workshop",
              date: "Upcoming",
              duration: "1 Day",
              description: "Specialized training in pediatric patient care and assessment.",
              level: "Intermediate"
            },
            {
              title: "Research Methodology",
              date: "Upcoming",
              duration: "3 Days",
              description: "Comprehensive workshop on nursing research and evidence-based practice.",
              level: "Beginner"
            },
            {
              title: "Infection Control Practices",
              date: "Upcoming",
              duration: "1 Day",
              description: "Best practices for infection prevention and control in healthcare settings.",
              level: "All Levels"
            },
            {
              title: "Mental Health Nursing",
              date: "Upcoming",
              duration: "2 Days",
              description: "Understanding and managing mental health conditions in nursing practice.",
              level: "Intermediate"
            },
            {
              title: "Leadership & Management",
              date: "Upcoming",
              duration: "2 Days",
              description: "Developing leadership skills for nursing management roles.",
              level: "Advanced"
            }
          ].map((workshop, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {workshop.level}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{workshop.duration}</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">{workshop.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{workshop.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                {workshop.date}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default NewsEventsPage;
