import HeroSection from "../components/HeroSection";
import CodeViewer from "../components/CodeViewer";
import ExperienceCarousel from "../components/ExperienceCarousel";
import ContactSection from "../components/ContactSection";
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
