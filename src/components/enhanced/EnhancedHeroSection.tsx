import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Briefcase, Users, TrendingUp, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const EnhancedHeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();

  const stats = [
    { icon: Briefcase, value: "5000+", label: "Job Opportunities" },
    { icon: Users, value: "50,000+", label: "Students Placed" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Scroll to internships section if query seems internship-related
      const isInternshipQuery = searchQuery.toLowerCase().includes('intern');
      const targetSection = isInternshipQuery ? 'internships' : 'jobs';
      
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero" id="home">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Theme Toggle Button */}
      <div className="absolute top-8 right-8 z-20">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full p-2 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="mb-8 slide-up">
            <p className="text-lg md:text-xl text-primary font-semibold mb-2">
              Welcome to Placemint 🚀
            </p>
            <p className="text-muted-foreground">
              Your gateway to amazing career opportunities
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 slide-up stagger-1 px-4">
            <span className="block text-foreground">Find Your Perfect</span>
            <span className="block gradient-primary bg-clip-text text-transparent">
              Career Path
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 slide-up stagger-2 px-4">
            Connect with top companies and unlock amazing internship and job opportunities
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12 slide-up stagger-3 px-4">
            <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-0">
              <div className="relative flex-1">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
                <Input
                  type="text"
                  placeholder="Search for jobs, internships, or companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-10 sm:pl-12 pr-4 sm:pr-32 py-3 sm:py-4 text-sm sm:text-lg rounded-full border-2 shadow-medium focus:shadow-glow transition-all duration-300"
                />
              </div>
              <Button 
                onClick={handleSearch}
                className="sm:absolute sm:right-2 sm:top-1/2 sm:transform sm:-translate-y-1/2 rounded-full px-6 sm:px-8 py-3 sm:py-2 gradient-primary hover:shadow-glow transition-all duration-300 text-sm sm:text-base"
              >
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 slide-up stagger-4 px-4">
            <Button 
              onClick={() => scrollToSection('internships')}
              size="lg" 
              className="gradient-primary hover:shadow-glow transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full"
            >
              Explore Internships
            </Button>
            <Button 
              onClick={() => scrollToSection('jobs')}
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full transition-all duration-300"
            >
              Browse Jobs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`text-center slide-up stagger-${index + 5} group cursor-pointer`}
                onClick={() => scrollToSection('placements')}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full gradient-primary mb-3 sm:mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;