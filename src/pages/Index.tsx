import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlacementsSection from "@/components/PlacementsSection";
import InternshipsSection from "@/components/InternshipsSection";
import JobsSection from "@/components/JobsSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "placements", "internships", "jobs", "feedback"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Placements Section */}
        <section id="placements">
          <PlacementsSection />
        </section>

        {/* Internships Section */}
        <section id="internships">
          <InternshipsSection />
        </section>

        {/* Jobs Section */}
        <section id="jobs">
          <JobsSection />
        </section>

        {/* Feedback Section */}
        <section id="feedback">
          <FeedbackSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
