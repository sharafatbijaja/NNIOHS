import React from "react";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Blog Preview Section Component
 * Displays latest blog posts with excerpts
 * Can be used on Home or dedicated Blog page
 */
const SectionBlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
      image: "/images/p1.jpg",
      author: "Sharafat Bijaja",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Web Development",
    },
    {
      id: 2,
      title: "10 Essential Tips for Optimizing Your Website's Performance",
      excerpt: "Learn proven strategies to improve your website's speed, user experience, and search engine rankings.",
      image: "/images/p2.jpg",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Performance",
    },
    {
      id: 3,
      title: "Building Scalable Applications with Next.js and TypeScript",
      excerpt: "A comprehensive guide to creating maintainable and scalable web applications using modern technologies.",
      image: "/images/p3.jpg",
      author: "Mike Chen",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Tutorial",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Stay updated with our latest articles, tutorials, and industry insights
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all mt-4 md:mt-0"
          >
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700"
            >
              {/* Featured Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all group-hover:translate-x-1"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Never Miss an Update
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter and get the latest articles delivered straight to your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            Subscribe Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionBlogPreview;
