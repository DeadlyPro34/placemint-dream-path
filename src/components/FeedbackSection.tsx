import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const FeedbackSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Frontend Developer",
      company: "TechCorp Solutions",
      image: "/api/placeholder/60/60",
      rating: 5,
      feedback: "Placemint helped me land my dream internship! The platform is amazing and the opportunities are genuine. Highly recommended for all students looking for quality placements.",
      course: "Computer Science Engineering"
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "Data Scientist",
      company: "DataVision Inc",
      image: "/api/placeholder/60/60",
      rating: 5,
      feedback: "The job matching algorithm is incredible. I found a perfect role that matched my skills and interests. The interview preparation resources were also very helpful.",
      course: "Data Science"
    },
    {
      id: 3,
      name: "Sneha Gupta",
      role: "UX Designer",
      company: "Creative Studios",
      image: "/api/placeholder/60/60",
      rating: 5,
      feedback: "Thanks to Placemint, I got multiple interview calls and finally got placed in my preferred company. The mentorship program was a game-changer for me.",
      course: "Design"
    },
    {
      id: 4,
      name: "Rohit Kumar",
      role: "Backend Engineer",
      company: "CloudTech Systems",
      image: "/api/placeholder/60/60",
      rating: 5,
      feedback: "The platform's user interface is intuitive and the job recommendations are spot-on. I appreciate the detailed company profiles and salary insights.",
      course: "Software Engineering"
    },
    {
      id: 5,
      name: "Ananya Singh",
      role: "Marketing Manager",
      company: "Growth Partners",
      image: "/api/placeholder/60/60",
      rating: 5,
      feedback: "Placemint doesn't just help you find jobs, it helps you build your career. The skill development courses and networking opportunities are excellent.",
      course: "MBA Marketing"
    },
    {
      id: 6,
      name: "Vikash Reddy",
      role: "Mobile Developer",
      company: "AppForge Technologies",
      image: "/api/placeholder/60/60",
      rating: 5,
      feedback: "I was skeptical about online placement platforms, but Placemint proved me wrong. Got placed within 2 months with a great package. Amazing experience!",
      course: "Mobile App Development"
    }
  ];

  const stats = [
    { value: "50,000+", label: "Happy Students" },
    { value: "2,500+", label: "Partner Companies" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "₹12 LPA", label: "Average Package" }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Student Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful students who found their dream careers through Placemint
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`text-center slide-up stagger-${index + 1}`}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 slide-up stagger-${(index % 3) + 1}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="gradient-primary text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic pl-6 mb-4">
                    "{testimonial.feedback}"
                  </p>
                </div>
                
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Course: <span className="font-medium text-foreground">{testimonial.course}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center slide-up stagger-4">
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto shadow-medium">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Join thousands of students who have found their dream careers through Placemint
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4 rounded-full"
              >
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;