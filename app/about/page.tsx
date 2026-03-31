import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, GraduationCap, Users, Award, MapPin } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-green-50 via-purple-100 to-white dark:from-gray-800 dark:via-green-950 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-green-600 dark:text-green-400">Naz Nursing Institute</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Shaping Compassionate & Competent Nurses Since 2017
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Naz Nursing Institute of Health Sciences was founded in 2017 under the umbrella of Waseem Welfare Trust with the vision to bridge the gap in quality nursing education in Karachi. Being a project of Naz General Hospital, we provide students with real-world clinical exposure from day one.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our institute is fully recognized by Pakistan Nursing & Midwifery Council (PNMC) and affiliated with Dow University of Health Sciences (DUHS) and Sindh Nursing Examination Board.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center">
                  <GraduationCap className="w-8 h-8 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">Vision</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      To become a leading nursing institution in Pakistan recognized for academic excellence, innovation in healthcare education, and producing leaders in the nursing profession.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-8 h-8 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold">Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      To deliver high-quality nursing education that combines scientific knowledge, clinical skills, and ethical values, preparing students to excel in a dynamic healthcare environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Principal's Message */}
      <div className="py-16 bg-green-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Principal's Message</h2>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-green-200 dark:bg-green-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">FK</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Madam Fatima (Principal)</h3>
              <blockquote className="text-gray-700 dark:text-gray-300 italic">
                &ldquo;Dear Students,<br /><br />
                Nursing is not just a profession — it is a noble calling. At Naz Nursing Institute, we nurture not only your skills but also your character so you become the change our healthcare system needs.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NNIOHS?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">DUHS Affiliated</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Generic BS Nursing Program affiliated with Dow University of Health Sciences
              </p>
            </div>
            <div className="text-center">
              <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clinical Training</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hands-on training at Dr. Ruth K.M. Pfau Civil Hospital Karachi
              </p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Highly qualified faculty with MSc Nursing and above qualifications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Nursing Journey?</h2>
          <p className="text-xl mb-8">Join us in shaping the future of healthcare</p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/admissions">
              Apply Now <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
