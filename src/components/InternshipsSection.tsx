import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Star } from "lucide-react";

const InternshipsSection = () => {
  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      location: "Remote",
      duration: "3 months",
      stipend: "₹15,000/month",
      type: "Paid",
      rating: 4.8,
      description: "Work on cutting-edge React applications and modern web technologies.",
      skills: ["React", "JavaScript", "CSS", "Git"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "DataVision Inc",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹20,000/month",
      type: "Paid",
      rating: 4.9,
      description: "Analyze large datasets and build machine learning models.",
      skills: ["Python", "ML", "SQL", "Pandas"],
      posted: "1 day ago"
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      company: "Creative Studios",
      location: "Mumbai",
      duration: "4 months",
      stipend: "₹12,000/month",
      type: "Paid",
      rating: 4.7,
      description: "Design beautiful user interfaces and enhance user experiences.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Backend Developer Intern",
      company: "CloudTech Systems",
      location: "Hyderabad",
      duration: "5 months",
      stipend: "₹18,000/month",
      type: "Paid",
      rating: 4.6,
      description: "Build scalable APIs and work with cloud infrastructure.",
      skills: ["Node.js", "MongoDB", "AWS", "Docker"],
      posted: "1 week ago"
    },
    {
      id: 5,
      title: "Marketing Intern",
      company: "Growth Partners",
      location: "Delhi",
      duration: "3 months",
      stipend: "₹10,000/month",
      type: "Paid",
      rating: 4.5,
      description: "Create marketing campaigns and analyze market trends.",
      skills: ["Digital Marketing", "Analytics", "Content Creation", "SEO"],
      posted: "5 days ago"
    },
    {
      id: 6,
      title: "Mobile App Developer Intern",
      company: "AppForge Technologies",
      location: "Pune",
      duration: "4 months",
      stipend: "₹16,000/month",
      type: "Paid",
      rating: 4.8,
      description: "Develop cross-platform mobile applications using React Native.",
      skills: ["React Native", "Mobile UI", "API Integration", "Testing"],
      posted: "4 days ago"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Internship Opportunities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gain hands-on experience with leading companies and kickstart your career
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <Card 
              key={internship.id} 
              className={`group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 slide-up stagger-${(index % 3) + 1}`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="gradient-primary text-white">
                    {internship.type}
                  </Badge>
                  <div className="flex items-center text-warning">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{internship.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {internship.title}
                </CardTitle>
                <p className="font-semibold text-lg text-primary">
                  {internship.company}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {internship.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {internship.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    Posted {internship.posted}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-success">
                      {internship.stipend}
                    </span>
                  </div>
                  <Button className="w-full gradient-primary hover:shadow-glow transition-all duration-300">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 slide-up stagger-4">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full transition-all duration-300"
          >
            View All Internships
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;