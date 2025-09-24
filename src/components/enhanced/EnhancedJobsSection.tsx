import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FilterBar } from "@/components/ui/filter-bar";
import { Building2, MapPin, Briefcase, Users, Star, Award } from "lucide-react";

const EnhancedJobsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");

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
      posted: "1 day ago",
      role: "Engineering",
      remote: false
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
      posted: "2 days ago",
      role: "Data Science",
      remote: true
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
      posted: "3 days ago",
      role: "Product",
      remote: false
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
      posted: "1 week ago",
      role: "Engineering",
      remote: true
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
      posted: "4 days ago",
      role: "Design",
      remote: true
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
      posted: "5 days ago",
      role: "Engineering",
      remote: false
    },
    {
      id: 7,
      title: "Marketing Manager",
      company: "Flipkart",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹15-22 LPA",
      rating: 4.5,
      employees: "50K+",
      description: "Lead digital marketing campaigns for e-commerce platform.",
      skills: ["Digital Marketing", "Analytics", "Campaign Management", "Growth"],
      posted: "6 days ago",
      role: "Marketing",
      remote: false
    },
    {
      id: 8,
      title: "QA Engineer",
      company: "Salesforce",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹12-18 LPA",
      rating: 4.6,
      employees: "75K+",
      description: "Ensure quality of cloud-based CRM solutions through automated testing.",
      skills: ["Automation Testing", "Selenium", "API Testing", "CI/CD"],
      posted: "1 week ago",
      role: "Quality Assurance",
      remote: true
    }
  ];

  // Get unique values for filters
  const roles = [...new Set(jobs.map(j => j.role))];
  const locations = [...new Set(jobs.map(j => j.location))];
  const experiences = [...new Set(jobs.map(j => j.experience))];

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRole = selectedRole === "all" || job.role === selectedRole;
      const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
      const matchesExperience = selectedExperience === "all" || job.experience === selectedExperience;

      return matchesSearch && matchesRole && matchesLocation && matchesExperience;
    });
  }, [searchQuery, selectedRole, selectedLocation, selectedExperience]);

  // Active filters for display
  const activeFilters = [
    ...(selectedRole !== "all" ? [{ label: "Role", value: selectedRole, onRemove: () => setSelectedRole("all") }] : []),
    ...(selectedLocation !== "all" ? [{ label: "Location", value: selectedLocation, onRemove: () => setSelectedLocation("all") }] : []),
    ...(selectedExperience !== "all" ? [{ label: "Experience", value: selectedExperience, onRemove: () => setSelectedExperience("all") }] : [])
  ];

  const clearAllFilters = () => {
    setSelectedRole("all");
    setSelectedLocation("all");
    setSelectedExperience("all");
    setSearchQuery("");
  };

  return (
    <section className="py-20 bg-background" id="jobs">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="gradient-secondary bg-clip-text text-transparent">
              Premium Job Opportunities
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Land your dream job at top tech companies with competitive packages
          </p>
        </div>

        {/* Filter Bar */}
        <div className="slide-up stagger-1">
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filters={[
              {
                label: "Role",
                key: "role",
                options: roles.map(role => ({
                  value: role,
                  label: role,
                  count: jobs.filter(j => j.role === role).length
                })),
                selected: selectedRole,
                onSelect: setSelectedRole
              },
              {
                label: "Location",
                key: "location",
                options: locations.map(location => ({
                  value: location,
                  label: location,
                  count: jobs.filter(j => j.location === location).length
                })),
                selected: selectedLocation,
                onSelect: setSelectedLocation
              },
              {
                label: "Experience",
                key: "experience",
                options: experiences.map(experience => ({
                  value: experience,
                  label: experience,
                  count: jobs.filter(j => j.experience === experience).length
                })),
                selected: selectedExperience,
                onSelect: setSelectedExperience
              }
            ]}
            activeFilters={activeFilters}
            onClearAll={clearAllFilters}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6 slide-up stagger-2">
          <p className="text-muted-foreground">
            Showing {filteredJobs.length} of {jobs.length} jobs
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredJobs.map((job, index) => (
            <Card 
              key={job.id} 
              className={`group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/20 slide-up stagger-${(index % 3) + 3}`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="gradient-secondary text-white">
                      {job.type}
                    </Badge>
                    {job.remote && (
                      <Badge variant="outline" className="text-xs">
                        Remote
                      </Badge>
                    )}
                  </div>
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

                <Badge variant="outline" className="w-fit">
                  <Award className="h-3 w-3 mr-1" />
                  {job.role}
                </Badge>
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

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12 slide-up stagger-3">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No jobs found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button onClick={clearAllFilters} variant="outline">
              Clear all filters
            </Button>
          </div>
        )}

        {/* View More Button */}
        {filteredJobs.length > 0 && (
          <div className="text-center mt-12 slide-up stagger-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 rounded-full transition-all duration-300"
            >
              Explore All Jobs
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnhancedJobsSection;