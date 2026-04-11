"use client";
import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const toolkitCards = [
  {
    title: "Web Development",
    items: [
      "WordPress Custom Themes",
      "Shopify & ECWID Stores",
      "HTML5, CSS3, SASS, Bootstrap",
      "Responsive UI & pixel-perfect layouts",
    ],
  },
  {
    title: "SEO & Digital Marketing",
    items: [
      "Technical SEO & metadata",
      "Google Shopping / Ads funnels",
      "Content optimization & analytics",
      "Social ads, FB/IG, TikTok campaigns",
    ],
  },
  {
    title: "Server & Hosting",
    items: [
      "WHM / cPanel management",
      "Hosting setup, backup and migration",
      "Performance tuning and caching",
      "Deployment planning and support",
    ],
  },
  {
    title: "AI & Workflow",
    items: [
      "ChatGPT Pro prompt expert",
      "Google Nano Banana / Meta AI",
      "AI-driven content + design",
      "Automation for marketing workflows",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Photoshop, Illustrator, Canva Pro",
      "Asana, Slack, Trello, Jira",
      "SemRush, Ahrefs, Moz, Ubersuggest",
      "Odoo, Magento, Shopify, Wix",
    ],
  },
];

const SectionToolkit = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section id="toolkit" className="py-20 bg-gray-50 dark:bg-gray-950" aria-label="Professional toolkit section">
      <div className="w-[80%] mx-auto">
        <SectionHeading
          title1="Professional"
          title2="Toolkit"
          description="A carousel of my main strengths, tools, and project capabilities across development, marketing, hosting, and AI." 
        />

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          arrows={true}
        >
          {toolkitCards.map((card) => (
            <article key={card.title} className="px-3 py-4">
              <div className="h-full rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm p-8 transition hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  {card.title}
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default SectionToolkit;
