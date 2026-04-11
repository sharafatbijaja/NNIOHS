import React from "react";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

/**
 * Call to Action Section Component
 * Prominent CTA section with multiple action options
 * Can be used on any page for conversions
 */
const SectionCallToAction = () => {
  const benefits = [
    "Free consultation",
    "No obligation",
    "Expert advice",
    "Quick response",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 dark:from-primary dark:via-primary/95 dark:to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Lets work together to create something amazing. Our team is ready
              to bring your vision to life with cutting-edge technology and
              creative solutions.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
              {/* <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border-2 border-white/30"
              >
                View Services
              </a> */}
            </div>
          </div>

          {/* Right Content - Video/Preview */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Play Button */}
                <button className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
                  <Play className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-lg" />
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/20 rounded-lg" />
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/70">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-white/70">Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/70">Support</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
              Free Consultation!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCallToAction;
