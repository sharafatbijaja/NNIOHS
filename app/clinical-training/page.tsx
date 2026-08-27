"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import SectionHeading from "@/components/common/SectionHeading";
import { 
  Hospital, 
  Stethoscope, 
  GraduationCap, 
  Award,
  Users,
  Clock,
  MapPin,
  CheckCircle,
  Building2,
  FileText,
  Target
} from "lucide-react";

/**
 * Clinical Training & Affiliations Page
 * Showcases clinical training opportunities and hospital affiliations
 */
const ClinicalTrainingPage = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Clinical Training & Affiliations"
        subtitle="Hands-On Clinical Experience"
        description="Gain practical experience through our extensive clinical training programs at leading hospitals"
      />

      {/* Our Teaching Hospitals */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Our Teaching"
          title2="Hospitals"
          description="Premier healthcare institutions providing clinical training to our students"
        />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dr. Ruth K.M. Pfau Civil Hospital */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-blue-100 dark:border-slate-700 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl">
                <Hospital className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dr. Ruth K.M. Pfau Civil Hospital</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Largest public hospital in Karachi with 1,800+ beds</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Multiple specialized departments for diverse clinical exposure</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Experienced medical staff and senior nurses for mentorship</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">24/7 emergency and critical care training opportunities</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Advanced medical equipment and technology access</p>
              </div>
            </div>
          </div>

          {/* Affiliated clinical hospitals */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-green-100 dark:border-slate-700 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-2xl">
                <Building2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Affiliated Clinical Hospitals</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Modern private hospital with state-of-the-art facilities</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Comprehensive healthcare services across all specialties</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Focus on patient-centered care and nursing excellence</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Structured clinical rotation programs for students</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Regular workshops and training sessions for students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Rotation Highlights */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Clinical Rotation"
          title2="Highlights"
          description="Comprehensive clinical exposure across various departments"
        />
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                department: "Medical-Surgical Nursing",
                duration: "8 weeks",
                description: "Care for patients with acute and chronic medical conditions"
              },
              {
                department: "Pediatric Nursing",
                duration: "6 weeks",
                description: "Specialized care for infants, children, and adolescents"
              },
              {
                department: "Obstetric & Gynecological Nursing",
                duration: "8 weeks",
                description: "Maternal and newborn care, labor and delivery support"
              },
              {
                department: "Critical Care Nursing",
                duration: "6 weeks",
                description: "ICU and emergency department patient care"
              },
              {
                department: "Psychiatric Nursing",
                duration: "4 weeks",
                description: "Mental health care and therapeutic interventions"
              },
              {
                department: "Community Health Nursing",
                duration: "6 weeks",
                description: "Public health initiatives and community outreach"
              }
            ].map((rotation, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-700 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">{rotation.duration}</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{rotation.department}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{rotation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hands-on Training */}
      <section className="container mx-auto">
        <SectionHeading
          title1="Hands-on"
          title2="Training"
          description="Practical skill development through supervised clinical practice"
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-purple-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Clinical Skills Development</h3>
            <div className="space-y-4">
              {[
                "Patient assessment and vital signs monitoring",
                "Medication administration and IV therapy",
                "Wound care and dressing changes",
                "Catheterization and specimen collection",
                "Emergency response and CPR",
                "Patient education and discharge planning"
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-orange-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Professional Development</h3>
            <div className="space-y-4">
              {[
                "Interdisciplinary team collaboration",
                "Communication with patients and families",
                "Documentation and record keeping",
                "Infection control practices",
                "Ethical decision-making",
                "Leadership and management skills"
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DUHS & PNMC Affiliation Details */}
      <section className="container mx-auto">
        <SectionHeading
          title1="DUHS & PNMC"
          title2="Affiliation Details"
          description="Recognized affiliations ensuring quality education and professional recognition"
        />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DUHS Affiliation */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dow University of Health Sciences (DUHS)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Affiliated Institution</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Recognition & Accreditation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Fully recognized by DUHS for BSN program</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Quality Assurance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Regular inspections and quality audits by DUHS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Faculty Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Training programs and workshops for faculty members</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Degree Validity</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">DUHS-recognized degree accepted nationwide and internationally</p>
                </div>
              </div>
            </div>
          </div>

          {/* PNMC Affiliation */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-2xl">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Pakistan Nursing Council (PNMC)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Regulatory Body</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Program Approval</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">BSN and CNA programs approved by PNMC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">License Eligibility</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Graduates eligible for PNMC licensing examination</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Standard Compliance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Adherence to PNMC curriculum and standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Professional Recognition</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">PNMC-registered nurses recognized across Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ClinicalTrainingPage;
