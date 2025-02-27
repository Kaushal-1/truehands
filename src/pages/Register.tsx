
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Building2, Store, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type UserRole = "institute" | "donor" | "supplier" | null;

const storeTypes = [
  "Grocery Store",
  "Supermarket",
  "General Store",
  "Convenience Store",
  "Wholesale Market",
  "Hypermarket",
  "Departmental Store",
  "Food Mart"
];

const Register = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    registrationYear: "",
    registrationProof: "",
    storeType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempt:", { ...formData, role: selectedRole });
  };

  const renderRoleSpecificFields = () => {
    switch (selectedRole) {
      case "institute":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="name">Institute Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="registrationProof">Proof of Institute Registration</Label>
              <Input
                id="registrationProof"
                type="file"
                onChange={(e) => setFormData({ ...formData, registrationProof: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="registrationYear">Registered in Year</Label>
              <Input
                id="registrationYear"
                type="date"
                value={formData.registrationYear}
                onChange={(e) => setFormData({ ...formData, registrationYear: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location of Institute</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
          </>
        );
      case "donor":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="name">Donor Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
          </>
        );
      case "supplier":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="name">Supplier Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Store Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="storeType">Type of Store</Label>
              <Select
                value={formData.storeType}
                onValueChange={(value) => setFormData({ ...formData, storeType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select store type" />
                </SelectTrigger>
                <SelectContent>
                  {storeTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        );
      default:
        return null;
    }
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

            {renderRoleSpecificFields()}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
