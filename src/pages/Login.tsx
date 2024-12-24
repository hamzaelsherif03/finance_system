import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

// Define valid credentials
const VALID_CREDENTIALS = {
  FINANCE: {
    email: "finance@example.com",
    password: "finance123",
    role: "Financial Staff"
  },
  MANAGER: {
    email: "manager@example.com",
    password: "manager123",
    role: "Manager"
  }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for finance staff credentials
    if (email === VALID_CREDENTIALS.FINANCE.email && password === VALID_CREDENTIALS.FINANCE.password) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userRole", VALID_CREDENTIALS.FINANCE.role);
      localStorage.setItem("userId", "1"); // Example ID for finance staff
      toast({
        title: "Login successful",
        description: "Welcome back, Financial Staff!",
      });
      navigate("/");
      return;
    }
    
    // Check for manager credentials
    if (email === VALID_CREDENTIALS.MANAGER.email && password === VALID_CREDENTIALS.MANAGER.password) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userRole", VALID_CREDENTIALS.MANAGER.role);
      localStorage.setItem("userId", "2"); // Example ID for manager
      toast({
        title: "Login successful",
        description: "Welcome back, Manager!",
      });
      navigate("/");
      return;
    }

    // Invalid credentials
    toast({
      title: "Login failed",
      description: "Invalid credentials. Please try again.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Finance Management System</CardTitle>
          <CardDescription>Login to access your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Example accounts:</p>
              <p>Finance Staff: finance@example.com / finance123</p>
              <p>Manager: manager@example.com / manager123</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;