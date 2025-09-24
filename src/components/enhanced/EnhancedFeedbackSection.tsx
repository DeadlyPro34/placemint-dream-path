import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Quote, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EnhancedFeedbackSection = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    rating: "",
    category: "",
    message: ""
  });

  const { toast } = useToast();

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!feedbackForm.name || !feedbackForm.email || !feedbackForm.rating || !feedbackForm.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Thank you for your feedback!",
      description: "We appreciate your input and will review it shortly."
    });

    // Reset form
    setFeedbackForm({
      name: "",
      email: "",
      rating: "",
      category: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFeedbackForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-accent/30" id="feedback">
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

        {/* Two Column Layout: Testimonials & Feedback Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Testimonials - 2/3 width */}
          <div className="lg:col-span-2">
            <div className="mb-8 slide-up">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                Latest Testimonials
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <Card 
                  key={testimonial.id} 
                  className={`group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 slide-up stagger-${index + 2}`}
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
                      <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                      <p className="text-muted-foreground italic pl-4 text-sm">
                        "{testimonial.feedback.substring(0, 120)}..."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Feedback Form - 1/3 width */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 slide-up stagger-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-5 w-5 mr-2 text-primary" />
                  Share Your Feedback
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Help us improve by sharing your experience
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name *"
                      value={feedbackForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="border-2 focus:border-primary/50"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email *"
                      value={feedbackForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-2 focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <Select 
                      value={feedbackForm.rating} 
                      onValueChange={(value) => handleInputChange('rating', value)}
                    >
                      <SelectTrigger className="border-2 focus:border-primary/50">
                        <SelectValue placeholder="Rate your experience *" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                        <SelectItem value="4">⭐⭐⭐⭐ Good</SelectItem>
                        <SelectItem value="3">⭐⭐⭐ Average</SelectItem>
                        <SelectItem value="2">⭐⭐ Poor</SelectItem>
                        <SelectItem value="1">⭐ Very Poor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Select 
                      value={feedbackForm.category} 
                      onValueChange={(value) => handleInputChange('category', value)}
                    >
                      <SelectTrigger className="border-2 focus:border-primary/50">
                        <SelectValue placeholder="Feedback Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="platform">Platform Experience</SelectItem>
                        <SelectItem value="placement">Placement Process</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Share your detailed feedback *"
                      value={feedbackForm.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-2 focus:border-primary/50 min-h-[100px]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center slide-up stagger-7">
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

export default EnhancedFeedbackSection;