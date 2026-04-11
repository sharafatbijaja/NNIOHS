import React, { useState } from "react";
import { Play, X, Volume2, Maximize } from "lucide-react";

/**
 * Video Showcase Section Component
 * Displays video content with play functionality
 * Can be used on Home or Services pages
 */
const SectionVideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Company Overview",
      description: "Learn about our mission, values, and what makes us different",
      thumbnail: "/images/p1.jpg",
      duration: "3:45",
    },
    {
      id: 2,
      title: "Our Process",
      description: "See how we work from concept to completion",
      thumbnail: "/images/p2.jpg",
      duration: "5:20",
    },
    {
      id: 3,
      title: "Client Success Stories",
      description: "Hear from our satisfied clients about their experience",
      thumbnail: "/images/p3.jpg",
      duration: "4:15",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See Us in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Watch our videos to learn more about our services and process
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <div className="relative bg-gray-900 rounded-3xl overflow-hidden aspect-video group cursor-pointer" onClick={() => setIsPlaying(true)}>
            {/* Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-12 h-12 text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">
                Welcome to Our Company
              </h3>
              <p className="text-white/80">
                Discover how we can help transform your business with cutting-edge solutions
              </p>
            </div>

            {/* Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                <Volume2 className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                <Maximize className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-xs font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {isPlaying && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setIsPlaying(false)}
          >
            <div className="relative w-full max-w-5xl">
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute -top-4 -right-4 p-2 bg-white text-gray-900 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center">
                <p className="text-white text-xl">Video Player Placeholder</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionVideoShowcase;
