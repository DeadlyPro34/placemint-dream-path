import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Briefcase, Users, Star } from "lucide-react";

const JobsSection = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Google",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹25-35 LPA",
      rating: 4.9,
      employees: "100K+",
      description: "Lead frontend development for Google Cloud Console using React and TypeScript.",
      skills: ["React", "TypeScript", "Redux", "Testing"],
      posted: "1 day ago"
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Microsoft",
      location: "Hyderabad",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹22-30 LPA",
      rating: 4.8,
      employees: "150K+",
      description: "Build AI/ML models for Azure services and analyze large-scale data.",
      skills: ["Python", "ML", "Azure", "Statistics"],
      posted: "2 days ago"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Amazon",
      location: "Mumbai",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₹30-45 LPA",
      rating: 4.7,
      employees: "1M+",
      description: "Drive product strategy for Amazon Prime Video's mobile platform.",
      skills: ["Product Strategy", "Analytics", "Leadership", "Agile"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "Netflix",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹28-38 LPA",
      rating: 4.8,
      employees: "10K+",
      description: "Manage cloud infrastructure and deployment pipelines at scale.",
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD"],
      posted: "1 week ago"
    },
    {
      id: 5,
      title: "UX Designer",
      company: "Adobe",
      location: "Delhi",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹18-25 LPA",
      rating: 4.6,
      employees: "25K+",
      description: "Design intuitive user experiences for Creative Cloud applications.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      posted: "4 days ago"
    },
    {
      id: 6,
      title: "Backend Engineer",
      company: "Uber",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹20-30 LPA",
      rating: 4.7,
      employees: "30K+",
      description: "Build scalable microservices for Uber's core platform.",
      skills: ["Java", "Microservices", "Kafka", "Redis"],
      posted: "5 days ago"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-secondary bg-clip-text text-transparent">
              Premium Job Opportunities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Land your dream job at top tech companies with competitive packages
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <Card 
              key={job.id} 
              className={`group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/20 slide-up stagger-${(index % 3) + 1}`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary" className="gradient-secondary text-white">
                    {job.type}
                  </Badge>
                  <div className="text-right">
                    <div className="flex items-center text-warning mb-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{job.rating}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Users className="h-3 w-3 mr-1" />
                      {job.employees}
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-secondary transition-colors mb-2">
                  {job.title}
                </CardTitle>
                
                <div className="flex items-center mb-2">
                  <Building2 className="h-5 w-5 mr-2 text-secondary" />
                  <p className="font-semibold text-lg text-secondary">
                    {job.company}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {job.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.experience} experience
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-success">
                      {job.salary}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {job.posted}
                    </span>
                  </div>
                  <Button className="w-full gradient-secondary hover:shadow-glow transition-all duration-300">
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
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 rounded-full transition-all duration-300"
          >
            Explore All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;