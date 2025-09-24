import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, User } from "lucide-react";
import { useTheme } from "next-themes";

interface EnhancedHeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const EnhancedHeader = ({ activeSection, onSectionChange }: EnhancedHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "placements", label: "Placements" },
    { id: "internships", label: "Internships" },
    { id: "jobs", label: "Jobs" },
    { id: "feedback", label: "Feedback" }
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navigateToDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-medium border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer slide-in-left"
            onClick={() => handleNavClick("home")}
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full gradient-primary flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg lg:text-xl">P</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Placemint
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 slide-in-right">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  activeSection === item.id 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary transition-transform duration-300 ${
                  activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 fade-in-up">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full p-2 hover:bg-accent"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            
            <Button
              onClick={navigateToDashboard}
              className="gradient-primary hover:shadow-glow transition-all duration-300 rounded-full px-6"
            >
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full p-2"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "max-h-96 opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="py-4 space-y-4 border-t border-border bg-background/95 backdrop-blur-md">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-accent rounded-lg slide-up stagger-${index + 1} ${
                  activeSection === item.id 
                    ? "text-primary bg-accent" 
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="px-4 pt-4 border-t border-border">
              <Button
                onClick={navigateToDashboard}
                className="w-full gradient-primary hover:shadow-glow transition-all duration-300 rounded-full"
              >
                <User className="h-4 w-4 mr-2" />
                Login to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EnhancedHeader;