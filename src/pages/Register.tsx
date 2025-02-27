
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Building2, Store, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

type UserRole = "institute" | "donor" | "supplier" | null;

const Register = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration logic will be added here
    console.log("Registration attempt:", { email, password, name, role: selectedRole });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-100 to-secondary-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 mb-2">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>
            Choose your role and enter your details to get started
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <Button
                type="button"
                variant={selectedRole === "institute" ? "default" : "outline"}
                className="flex flex-col items-center gap-2 p-4 h-auto"
                onClick={() => setSelectedRole("institute")}
              >
                <Building2 className="h-6 w-6" />
                <span className="text-sm">Institute</span>
              </Button>
              <Button
                type="button"
                variant={selectedRole === "donor" ? "default" : "outline"}
                className="flex flex-col items-center gap-2 p-4 h-auto"
                onClick={() => setSelectedRole("donor")}
              >
                <UserRound className="h-6 w-6" />
                <span className="text-sm">Donor</span>
              </Button>
              <Button
                type="button"
                variant={selectedRole === "supplier" ? "default" : "outline"}
                className="flex flex-col items-center gap-2 p-4 h-auto"
                onClick={() => setSelectedRole("supplier")}
              >
                <Store className="h-6 w-6" />
                <span className="text-sm">Supplier</span>
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={!selectedRole}>
              Create Account
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Register;
