import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FilterBar } from "@/components/ui/filter-bar";
import { Calendar, MapPin, Clock, Star, Briefcase } from "lucide-react";

const EnhancedInternshipsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

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
      posted: "2 days ago",
      domain: "Technology"
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
      posted: "1 day ago",
      domain: "Data Science"
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
      posted: "3 days ago",
      domain: "Design"
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
      posted: "1 week ago",
      domain: "Technology"
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
      posted: "5 days ago",
      domain: "Marketing"
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
      posted: "4 days ago",
      domain: "Technology"
    },
    {
      id: 7,
      title: "Business Analyst Intern",
      company: "Consulting Pro",
      location: "Chennai",
      duration: "4 months",
      stipend: "₹14,000/month",
      type: "Paid",
      rating: 4.6,
      description: "Analyze business processes and provide strategic recommendations.",
      skills: ["Excel", "PowerBI", "Business Analysis", "Process Mapping"],
      posted: "6 days ago",
      domain: "Business"
    },
    {
      id: 8,
      title: "Content Writing Intern",
      company: "Media House",
      location: "Remote",
      duration: "3 months",
      stipend: "₹8,000/month",
      type: "Paid",
      rating: 4.4,
      description: "Create engaging content for digital platforms and blogs.",
      skills: ["Content Writing", "SEO", "Research", "Social Media"],
      posted: "1 week ago",
      domain: "Marketing"
    }
  ];

  // Get unique values for filters
  const domains = [...new Set(internships.map(i => i.domain))];
  const locations = [...new Set(internships.map(i => i.location))];
  const durations = [...new Set(internships.map(i => i.duration))];

  // Filter internships based on search and filters
  const filteredInternships = useMemo(() => {
    return internships.filter(internship => {
      const matchesSearch = 
        internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        internship.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesDomain = selectedDomain === "all" || internship.domain === selectedDomain;
      const matchesLocation = selectedLocation === "all" || internship.location === selectedLocation;
      const matchesDuration = selectedDuration === "all" || internship.duration === selectedDuration;

      return matchesSearch && matchesDomain && matchesLocation && matchesDuration;
    });
  }, [searchQuery, selectedDomain, selectedLocation, selectedDuration]);

  // Active filters for display
  const activeFilters = [
    ...(selectedDomain !== "all" ? [{ label: "Domain", value: selectedDomain, onRemove: () => setSelectedDomain("all") }] : []),
    ...(selectedLocation !== "all" ? [{ label: "Location", value: selectedLocation, onRemove: () => setSelectedLocation("all") }] : []),
    ...(selectedDuration !== "all" ? [{ label: "Duration", value: selectedDuration, onRemove: () => setSelectedDuration("all") }] : [])
  ];

  const clearAllFilters = () => {
    setSelectedDomain("all");
    setSelectedLocation("all");
    setSelectedDuration("all");
    setSearchQuery("");
  };

  return (
    <section className="py-20 bg-accent/30" id="internships">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              Internship Opportunities
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Gain hands-on experience with leading companies and kickstart your career
          </p>
        </div>

        {/* Filter Bar */}
        <div className="slide-up stagger-1">
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filters={[
              {
                label: "Domain",
                key: "domain",
                options: domains.map(domain => ({
                  value: domain,
                  label: domain,
                  count: internships.filter(i => i.domain === domain).length
                })),
                selected: selectedDomain,
                onSelect: setSelectedDomain
              },
              {
                label: "Location",
                key: "location",
                options: locations.map(location => ({
                  value: location,
                  label: location,
                  count: internships.filter(i => i.location === location).length
                })),
                selected: selectedLocation,
                onSelect: setSelectedLocation
              },
              {
                label: "Duration",
                key: "duration",
                options: durations.map(duration => ({
                  value: duration,
                  label: duration,
                  count: internships.filter(i => i.duration === duration).length
                })),
                selected: selectedDuration,
                onSelect: setSelectedDuration
              }
            ]}
            activeFilters={activeFilters}
            onClearAll={clearAllFilters}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6 slide-up stagger-2">
          <p className="text-muted-foreground">
            Showing {filteredInternships.length} of {internships.length} internships
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredInternships.map((internship, index) => (
            <Card 
              key={internship.id} 
              className={`group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 slide-up stagger-${(index % 3) + 3}`}
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
                <Badge variant="outline" className="w-fit">
                  <Briefcase className="h-3 w-3 mr-1" />
                  {internship.domain}
                </Badge>
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

        {/* No Results */}
        {filteredInternships.length === 0 && (
          <div className="text-center py-12 slide-up stagger-3">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No internships found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button onClick={clearAllFilters} variant="outline">
              Clear all filters
            </Button>
          </div>
        )}

        {/* View More Button */}
        {filteredInternships.length > 0 && (
          <div className="text-center mt-12 slide-up stagger-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full transition-all duration-300"
            >
              View All Internships
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnhancedInternshipsSection;