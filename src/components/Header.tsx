import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'placements', label: 'Placements' },
    { id: 'internships', label: 'Internships' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'feedback', label: 'Feedback' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="slide-in-left">
            <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Placemint
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium fade-in-up stagger-${index + 1} ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 slide-in-right">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:shadow-glow transition-all duration-300"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium text-left ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;