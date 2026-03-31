"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import SectionAbout from "./SectionAbout/SectionAbout";
import SectionSkills from "./SectionSkills/SectionSkills";
import Project from "./Project/Project";
import Experience from "./Experience/Experience";
import ClientReview from "./ClientReview/ClientReview";
import ContactSection from "./SectionContact/SectionContact";
import Footer from "./Footer/Footer";

import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    const initAOS = async() => {
      await import ('aos')
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
        anchorPlacement: 'top-bottom',
      })
    }
    initAOS()
      })

  return (
    <div className="overflow-hidden">
      <Hero />
      <SectionAbout />
      <SectionSkills />
      <Project />
      <Experience />
      <ClientReview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
