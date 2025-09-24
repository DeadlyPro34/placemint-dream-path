import { useState, useEffect } from "react";
import EnhancedHeader from "@/components/enhanced/EnhancedHeader";
import EnhancedHeroSection from "@/components/enhanced/EnhancedHeroSection";
import PlacementsSection from "@/components/PlacementsSection";
import EnhancedInternshipsSection from "@/components/enhanced/EnhancedInternshipsSection";
import EnhancedJobsSection from "@/components/enhanced/EnhancedJobsSection";
import EnhancedFeedbackSection from "@/components/enhanced/EnhancedFeedbackSection";
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
      {/* Enhanced Header */}
      <EnhancedHeader 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />

      {/* Main Content */}
      <main>
        {/* Enhanced Hero Section with Day/Night Toggle */}
        <EnhancedHeroSection />

        {/* Placements Section */}
        <section id="placements">
          <PlacementsSection />
        </section>

        {/* Enhanced Internships Section with Filters */}
        <EnhancedInternshipsSection />

        {/* Enhanced Jobs Section with Filters */}
        <EnhancedJobsSection />

        {/* Enhanced Feedback Section with Form */}
        <EnhancedFeedbackSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
