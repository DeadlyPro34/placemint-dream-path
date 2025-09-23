import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginForm from "@/components/auth/LoginForm";
import StudentDashboard from "@/components/dashboards/StudentDashboard";
import MentorDashboard from "@/components/dashboards/MentorDashboard";
import AdminDashboard from "@/components/dashboards/AdminDashboard";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const { user, login, logout, isLoading, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (email: string, password: string, role: string) => {
    const result = await login(email, password, role);
    
    if (result.success) {
      toast({
        title: "Success",
        description: "Login successful! Welcome to your dashboard.",
      });
    } else {
      toast({
        title: "Error", 
        description: result.error || "Login failed",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} isLoading={isLoading} />;
  }

  // Render appropriate dashboard based on user role
  switch (user?.role) {
    case "student":
      return <StudentDashboard user={user} onLogout={handleLogout} />;
    case "mentor":
      return <MentorDashboard user={user} onLogout={handleLogout} />;
    case "admin":
      return <AdminDashboard user={user} onLogout={handleLogout} />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Invalid Role</h1>
            <button onClick={handleLogout} className="text-primary underline">
              Logout and try again
            </button>
          </div>
        </div>
      );
  }
}