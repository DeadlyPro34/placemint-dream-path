import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Send 
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Internships", href: "#internships" },
      { label: "Jobs", href: "#jobs" },
      { label: "Feedback", href: "#feedback" }
    ],
    "For Students": [
      { label: "Career Guidance", href: "#career" },
      { label: "Resume Builder", href: "#resume" },
      { label: "Interview Prep", href: "#interview" },
      { label: "Skill Development", href: "#skills" },
      { label: "Success Stories", href: "#stories" }
    ],
    "For Companies": [
      { label: "Post Jobs", href: "#post-jobs" },
      { label: "Find Candidates", href: "#candidates" },
      { label: "Campus Hiring", href: "#campus" },
      { label: "Pricing Plans", href: "#pricing" },
      { label: "Partner With Us", href: "#partner" }
    ],
    "Support": [
      { label: "Help Center", href: "#help" },
      { label: "Contact Support", href: "#support" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "FAQ", href: "#faq" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Latest Opportunities
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Get exclusive job alerts, internship notifications, and career tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 rounded-full"
              />
              <Button className="gradient-primary hover:shadow-glow transition-all duration-300 rounded-full px-6">
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 slide-up">
            <h2 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Placemint
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              India's leading placement platform connecting talented students with top companies. 
              Your gateway to a successful career starts here.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>support@placemint.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={title} className={`slide-up stagger-${index + 1}`}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Placemint. All rights reserved. Made with ❤️ for students.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-200"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;