"use client";
import SectionHeading from "@/components/common/SectionHeading";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
import { userReviewData } from "@/data";

const ClientReview = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section id="reviews" className="bg-linear-to-b from-transparent to-white dark:from-transparent dark:to-slate-950" aria-label="Client reviews section">
      <div className="w-[80%] mx-auto">
        {/* <SectionHeading
          title1="Real Client"
          title2="Reviews"
          description="Hear what my clients have to say about working with me."
        /> */}
         <SectionHeading
          title1="Student"
          title2="Reviews"
          description="Hear what my clients have to say about working with me."/>

        <div className="mt-10">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={true}
          >
             {userReviewData.map((user) => {
                return <article key={user.id}>
                    <ReviewCard user={user} />
                </article>
            })}
          </Carousel>
         
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
