import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Briefcase, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { icon: Briefcase, value: "5000+", label: "Job Opportunities" },
    { icon: Users, value: "50,000+", label: "Students Placed" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-up">
            <span className="block text-foreground">Find Your Perfect</span>
            <span className="block gradient-primary bg-clip-text text-transparent">
              Career Path
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up stagger-1">
            Connect with top companies and unlock amazing internship and job opportunities
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 slide-up stagger-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for jobs, internships, or companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-32 py-4 text-lg rounded-full border-2 shadow-medium focus:shadow-glow transition-all duration-300"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-8 py-2 gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 slide-up stagger-3">
            <Button 
              size="lg" 
              className="gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg rounded-full"
            >
              Explore Internships
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Browse Jobs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`text-center slide-up stagger-${index + 4}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4 shadow-glow">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;