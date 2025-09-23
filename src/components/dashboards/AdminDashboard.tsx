import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Building, TrendingUp, Shield, Calendar, AlertCircle } from "lucide-react";

interface AdminDashboardProps {
  user: { email: string; role: string };
  onLogout: () => void;
}

export default function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const systemStats = [
    { label: "Total Students", value: "1,247", change: "+12%", icon: Users },
    { label: "Active Mentors", value: "86", change: "+5%", icon: Shield },
    { label: "Partner Companies", value: "124", change: "+8%", icon: Building },
    { label: "Placements This Month", value: "89", change: "+15%", icon: TrendingUp },
  ];

  const recentActivities = [
    { type: "placement", message: "New placement record: 95% success rate achieved", time: "2 hours ago", priority: "high" },
    { type: "company", message: "TechCorp partnership renewed for 2024", time: "5 hours ago", priority: "medium" },
    { type: "mentor", message: "5 new mentors onboarded this week", time: "1 day ago", priority: "low" },
    { type: "alert", message: "System maintenance scheduled for Sunday", time: "2 days ago", priority: "high" },
  ];

  const pendingTasks = [
    { task: "Review mentor applications", count: 12, urgency: "high" },
    { task: "Approve company partnerships", count: 5, urgency: "medium" },
    { task: "Update placement reports", count: 3, urgency: "low" },
    { task: "Review student feedback", count: 8, urgency: "medium" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/10">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">System Overview & Management</p>
          </div>
          <Button onClick={onLogout} variant="outline">
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                    </div>
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* System Activities */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent System Activities
              </CardTitle>
              <CardDescription>Latest updates and system events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className="flex-1">
                      <p className="font-medium">{activity.message}</p>
                      <p className="text-sm text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                    <Badge 
                      variant={
                        activity.priority === "high" ? "destructive" : 
                        activity.priority === "medium" ? "default" : "secondary"
                      }
                    >
                      {activity.priority}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View Activity Log
              </Button>
            </CardContent>
          </Card>

          {/* Pending Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Pending Tasks
              </CardTitle>
              <CardDescription>Items requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTasks.map((task, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm">{task.task}</h4>
                      <Badge variant="outline">{task.count}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge 
                        variant={
                          task.urgency === "high" ? "destructive" : 
                          task.urgency === "medium" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {task.urgency} priority
                      </Badge>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button className="flex items-center gap-2" variant="outline">
                <Users className="h-4 w-4" />
                Manage Users
              </Button>
              <Button className="flex items-center gap-2" variant="outline">
                <Building className="h-4 w-4" />
                Company Settings
              </Button>
              <Button className="flex items-center gap-2" variant="outline">
                <TrendingUp className="h-4 w-4" />
                View Reports
              </Button>
              <Button className="flex items-center gap-2" variant="outline">
                <Shield className="h-4 w-4" />
                Security Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}