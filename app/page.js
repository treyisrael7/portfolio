"use client";

import HeroSection from "../components/hero/HeroSection";
import CodeViewer from "../components/code-viewer/CodeViewer";
import ExperienceCarousel from "../components/experience/ExperienceCarousel";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main>
      <HeroSection />
      <CodeViewer />
      <ExperienceCarousel />
      <ContactSection />
      <Footer />
    </main>
  );
}
