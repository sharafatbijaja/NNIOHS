import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

/**
 * Testimonials Section Component
 * Displays client testimonials with ratings and avatars
 * Can be used on Home, About, or Services pages
 */
const SectionTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      company: "TechStart Inc.",
      avatar: "/images/u1.jpg",
      rating: 5,
      content: "Working with this team was an absolute pleasure. They delivered our project on time and exceeded all expectations. The quality of work and attention to detail is outstanding.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthHub",
      avatar: "/images/u2.jpg",
      rating: 5,
      content: "The team's expertise in web development and digital marketing helped us increase our online presence significantly. Highly recommend their services to anyone looking for quality work.",
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      company: "InnovateTech",
      avatar: "/images/u3.jpg",
      rating: 5,
      content: "Professional, responsive, and incredibly talented. They understood our vision perfectly and brought it to life. The final product was exactly what we needed and more.",
    },
    {
      name: "David Wilson",
      role: "Founder",
      company: "StartupX",
      avatar: "/images/u4.jpg",
      rating: 5,
      content: "From concept to launch, the team provided exceptional support. Their technical skills and creative solutions helped us build a product that stands out in the market.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.9/5 Average Rating</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="font-semibold">500+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="font-semibold">98% Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonials;
