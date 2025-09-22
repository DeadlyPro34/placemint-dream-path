import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Target, Calendar, Users, Building2 } from "lucide-react";

const PlacementsSection = () => {
  const placementStats = [
    {
      icon: TrendingUp,
      title: "95% Placement Rate",
      description: "Highest placement success rate in the industry",
      color: "text-success"
    },
    {
      icon: Award,
      title: "₹12 LPA Average",
      description: "Above industry average starting packages",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "2,500+ Companies",
      description: "Active hiring partners across all sectors",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "50,000+ Placed",
      description: "Students successfully placed in last 5 years",
      color: "text-warning"
    }
  ];

  const topRecruiters = [
    {
      name: "Google",
      package: "₹45 LPA",
      roles: "SDE, Product Manager, Data Scientist",
      hired: "250+ students"
    },
    {
      name: "Microsoft",
      package: "₹42 LPA",
      roles: "Software Engineer, Program Manager",
      hired: "180+ students"
    },
    {
      name: "Amazon",
      package: "₹38 LPA",
      roles: "SDE, Business Analyst, Operations",
      hired: "320+ students"
    },
    {
      name: "Flipkart",
      package: "₹35 LPA",
      roles: "Frontend Dev, Backend Dev, DevOps",
      hired: "200+ students"
    },
    {
      name: "Uber",
      package: "₹32 LPA",
      roles: "Software Engineer, Data Engineer",
      hired: "150+ students"
    },
    {
      name: "Netflix",
      package: "₹40 LPA",
      roles: "Full Stack Developer, ML Engineer",
      hired: "80+ students"
    }
  ];

  const placementProcess = [
    {
      step: "1",
      title: "Profile Registration",
      description: "Create your profile with academic details and skill assessments"
    },
    {
      step: "2",
      title: "Skill Enhancement",
      description: "Access our training programs and certification courses"
    },
    {
      step: "3",
      title: "Company Matching",
      description: "Get matched with companies based on your profile and preferences"
    },
    {
      step: "4",
      title: "Interview Process",
      description: "Participate in online tests, technical rounds, and HR interviews"
    },
    {
      step: "5",
      title: "Final Selection",
      description: "Receive offer letters and start your dream career"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              Placement Excellence
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Industry-leading placement records with top companies offering exceptional packages
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {placementStats.map((stat, index) => (
            <Card 
              key={stat.title} 
              className={`text-center group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 slide-up stagger-${index + 1}`}
            >
              <CardContent className="pt-8 pb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {stat.title}
                </h3>
                <p className="text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Recruiters */}
        <div className="mb-20">
          <div className="text-center mb-12 slide-up">
            <h3 className="text-3xl font-bold mb-4">Our Top Recruiting Partners</h3>
            <p className="text-muted-foreground text-lg">
              Leading companies trust Placemint for their hiring needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRecruiters.map((company, index) => (
              <Card 
                key={company.name} 
                className={`group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 slide-up stagger-${(index % 3) + 1}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {company.name}
                    </CardTitle>
                    <Badge variant="secondary" className="gradient-primary text-white">
                      {company.package}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4 mr-2" />
                    {company.roles}
                  </div>
                  <div className="flex items-center text-sm text-success font-medium">
                    <Users className="h-4 w-4 mr-2" />
                    {company.hired}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Placement Process */}
        <div className="mb-16">
          <div className="text-center mb-12 slide-up">
            <h3 className="text-3xl font-bold mb-4">Our Placement Process</h3>
            <p className="text-muted-foreground text-lg">
              A streamlined 5-step process to land your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {placementProcess.map((process, index) => (
              <div 
                key={process.step} 
                className={`text-center group slide-up stagger-${index + 1}`}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full gradient-primary text-white flex items-center justify-center text-2xl font-bold shadow-glow group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  {index < placementProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  )}
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {process.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center slide-up">
          <div className="bg-accent/50 border-2 border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Begin Your Placement Journey?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Join our placement program and get access to exclusive opportunities at top companies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4 rounded-full"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Register for Placements
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full transition-all duration-300"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;