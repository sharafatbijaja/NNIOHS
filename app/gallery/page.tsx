"use client";

import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import { galleryCategories, galleryItems } from "@/data/galleryData";
import { useState } from "react";
import { Filter, ZoomIn, Heart, Share2 } from "lucide-react";
import Image from "next/image";

/**
 * Gallery Page
 * Displays gallery items with filtering and lightbox functionality
 * Uses global components for consistent styling
 */
const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <PageWrapper>
      <PageTitle
        title="Gallery"
        subtitle="Visual Showcase"
        description="Explore our collection of campus photos, clinical training, events, and student life moments"
      />

      {/* Gallery Filter Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
            }`}
          >
            All Items
          </button>
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Masonry-style Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700"
            >
              {/* Gallery Image */}
              <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(item.image)}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedImage(item.image)}
                    className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white text-gray-900 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Gallery Item Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="text-xs px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Items Found */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 mx-auto text-gray-300 dark:text-slate-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No items found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Selected image"
              width={1200}
              height={800}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default GalleryPage;
