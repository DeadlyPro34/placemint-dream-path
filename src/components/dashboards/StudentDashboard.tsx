import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, BriefcaseIcon, Calendar, Star, TrendingUp } from "lucide-react";

interface StudentDashboardProps {
  user: { email: string; role: string };
  onLogout: () => void;
}

export default function StudentDashboard({ user, onLogout }: StudentDashboardProps) {
  const applications = [
    { company: "TechCorp", position: "Frontend Developer", status: "Under Review", type: "Internship" },
    { company: "DataSoft", position: "Data Analyst", status: "Shortlisted", type: "Job" },
    { company: "StartupXYZ", position: "UI/UX Designer", status: "Applied", type: "Internship" },
  ];

  const recommendations = [
    { company: "Google", position: "Software Engineer Intern", match: "95%" },
    { company: "Microsoft", position: "Product Manager Intern", match: "88%" },
    { company: "Amazon", position: "Data Science Intern", match: "82%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Student Dashboard
            </h1>
            <p className="text-muted-foreground">Welcome back, {user.email}</p>
          </div>
          <Button onClick={onLogout} variant="outline">
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Applications</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <BriefcaseIcon className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Interviews</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Calendar className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Offers</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <Star className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Profile Score</p>
                  <p className="text-2xl font-bold">85%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BriefcaseIcon className="h-5 w-5" />
                Recent Applications
              </CardTitle>
              <CardDescription>Track your application status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex justify-between items-center p-4 rounded-lg border">
                    <div>
                      <h4 className="font-semibold">{app.position}</h4>
                      <p className="text-sm text-muted-foreground">{app.company}</p>
                      <Badge variant="outline" className="mt-1">
                        {app.type}
                      </Badge>
                    </div>
                    <Badge 
                      variant={app.status === "Shortlisted" ? "default" : "secondary"}
                    >
                      {app.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Applications
              </Button>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Recommended for You
              </CardTitle>
              <CardDescription>Opportunities matching your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{rec.position}</h4>
                        <p className="text-sm text-muted-foreground">{rec.company}</p>
                      </div>
                      <Badge variant="default">{rec.match} match</Badge>
                    </div>
                    <Button size="sm" className="w-full mt-2">
                      Apply Now
                    </Button>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View More Opportunities
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}