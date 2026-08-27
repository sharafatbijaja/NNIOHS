"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import SectionHeading from "@/components/common/SectionHeading";
import { 
  User, 
  GraduationCap, 
  Award,
  BookOpen,
  Stethoscope,
  Users,
  Star,
  MapPin,
  Mail,
  Phone
} from "lucide-react";

/**
 * Faculty & Staff Page
 * Showcases the principal, faculty members, and teaching team
 */
const FacultyPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Faculty & Staff"
        subtitle="Experienced Educators & Mentors"
        description="Meet our dedicated team of experienced nursing professionals committed to excellence in education"
      />

      {/* Principal's Profile */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Principal's"
          title2="Profile"
          description="Leadership and vision driving nursing education excellence"
        />
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-blue-100 dark:border-slate-700 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <User className="w-24 h-24 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Madam Fatima</h3>
                <p className="text-primary font-semibold mt-2">Principal</p>
                <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Professional Background</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Madam Fatima brings over 25 years of distinguished experience in nursing education and healthcare administration. Her visionary leadership has been instrumental in establishing Ikhlas Institute of Nursing as a premier nursing institution in Pakistan.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Qualifications & Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Master of Science in Nursing (MSN)",
                      "Post-Graduate Diploma in Nursing Education",
                      "Certified Nurse Educator (CNE)",
                      "Healthcare Management Certification",
                      "Research Methodology Expert",
                      "Curriculum Development Specialist"
                    ].map((qualification, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{qualification}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Leadership Philosophy</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    &ldquo;Our mission is to produce compassionate, competent, and confident nursing professionals who can meet the evolving healthcare challenges of the 21st century. We believe in holistic education that combines academic excellence with practical skills and ethical values.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Faculty"
          title2="Members"
          description="Highly qualified and experienced nursing educators"
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Dr. Ayesha Khan",
              designation: "Senior Lecturer - Medical-Surgical Nursing",
              qualification: "MSN, PhD Scholar",
              experience: "15 years",
              specialization: "Critical Care Nursing",
              image: <User className="w-16 h-16" />
            },
            {
              name: "Ms. Sarah Ahmed",
              designation: "Lecturer - Pediatric Nursing",
              qualification: "MSN, BSN",
              experience: "10 years",
              specialization: "Child Health Nursing",
              image: <User className="w-16 h-16" />
            },
            {
              name: "Mr. Imran Malik",
              designation: "Clinical Instructor",
              qualification: "MSN, RN",
              experience: "12 years",
              specialization: "Emergency Nursing",
              image: <User className="w-16 h-16" />
            },
            {
              name: "Ms. Fatima Zahra",
              designation: "Lecturer - Obstetric & Gynecological Nursing",
              qualification: "MSN, Midwifery Specialist",
              experience: "8 years",
              specialization: "Maternal Health",
              image: <User className="w-16 h-16" />
            },
            {
              name: "Dr. Hassan Raza",
              designation: "Assistant Professor - Anatomy & Physiology",
              qualification: "MBBS, MPhil Anatomy",
              experience: "18 years",
              specialization: "Basic Medical Sciences",
              image: <User className="w-16 h-16" />
            },
            {
              name: "Ms. Zainab Bibi",
              designation: "Lecturer - Community Health Nursing",
              qualification: "MSN, MPH",
              experience: "9 years",
              specialization: "Public Health",
              image: <User className="w-16 h-16" />
            }
          ].map((faculty, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 w-20 h-20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {faculty.image}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{faculty.name}</h3>
                  <p className="text-sm text-primary font-medium">{faculty.designation}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{faculty.qualification}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{faculty.experience} Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{faculty.specialization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Teaching Team */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Our Teaching"
          title2="Team"
          description="Dedicated professionals committed to student success"
        />
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Experienced Faculty",
                description: "Average 12+ years of teaching experience",
                color: "blue"
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Highly Qualified",
                description: "MSN, PhD, and specialized certifications",
                color: "green"
              },
              {
                icon: <Stethoscope className="w-8 h-8" />,
                title: "Clinical Experts",
                description: "Active practitioners in healthcare",
                color: "purple"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Dedicated Mentors",
                description: "Committed to student development",
                color: "orange"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`bg-${feature.color}-100 dark:bg-${feature.color}-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-${feature.color}-600 dark:text-${feature.color}-400`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Teaching Methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Interactive classroom sessions with multimedia",
                "Case-based learning and problem-solving",
                "Simulation-based practical training",
                "Clinical supervision and mentorship",
                "Research projects and evidence-based practice",
                "Continuous assessment and feedback"
              ].map((method, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{method}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact Faculty</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-slate-700 px-6 py-4 rounded-xl">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">info@ikhlasedu.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-slate-700 px-6 py-4 rounded-xl">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">+92 21 1234567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default FacultyPage;
