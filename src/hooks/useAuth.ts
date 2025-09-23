import { useState, useEffect } from "react";

interface User {
  email: string;
  role: "student" | "mentor" | "admin";
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored authentication
    const storedUser = localStorage.getItem("placemint_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("placemint_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: string) => {
    setIsLoading(true);
    
    // Simulate authentication (replace with Supabase auth)
    try {
      // Demo credentials for testing
      const validCredentials = [
        { email: "student@placemint.com", password: "student123", role: "student" },
        { email: "mentor@placemint.com", password: "mentor123", role: "mentor" },
        { email: "admin@placemint.com", password: "admin123", role: "admin" },
      ];

      const isValid = validCredentials.some(
        cred => cred.email === email && cred.password === password && cred.role === role
      );

      if (isValid) {
        const userData: User = { email, role: role as User["role"] };
        setUser(userData);
        localStorage.setItem("placemint_user", JSON.stringify(userData));
        return { success: true };
      } else {
        return { success: false, error: "Invalid credentials" };
      }
    } catch (error) {
      return { success: false, error: "Login failed" };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("placemint_user");
  };

  return {
    user,
    login,
    logout,
    isLoading,
    isAuthenticated: !!user,
  };
}