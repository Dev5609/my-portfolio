import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CurrentlySection from "@/components/CurrentlySection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="dark min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CurrentlySection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
