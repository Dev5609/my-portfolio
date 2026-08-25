import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TechMarquee from "@/components/TechMarquee";
import CurrentlySection from "@/components/CurrentlySection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import NoiseOverlay from "@/components/NoiseOverlay";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <NoiseOverlay />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechMarquee />
        <CurrentlySection />
        <ProjectsSection />
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
