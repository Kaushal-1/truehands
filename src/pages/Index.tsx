
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Chatbot from "./chatbot"; // Import Chatbot component
import { ArrowRight, UserRound, Building2, Store } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-100 to-secondary-200">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold text-primary flex items-center gap-2">
            <span>TRUE Hands</span>
            <span role="img" aria-label="hands">🤲</span>
          </a>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/institute/AdminDash">Admin</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/supplier">Supplier</Link>
            </Button> 
            <Button variant="outline" asChild>
              <Link to="/institute/dashboard">Institutes</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/donor">Donor</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-32 pb-16">
        <section className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary rounded-full mb-6">
            Making a Difference Together
          </span>
          <h1 className="hero-heading mb-6">
            Connecting Hearts, Delivering Hope
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our transparent platform connecting institutes, donors, and suppliers
            to ensure resources reach those in need efficiently and securely.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary-100 text-primary flex items-center justify-center">
                <Building2 className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">For Institutes</h3>
            <p className="text-muted-foreground mb-4">
              Easily request resources and track donations in real-time while maintaining
              complete transparency.
            </p>
            <Button variant="link" className="p-0">
              Register as Institute <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary-100 text-primary flex items-center justify-center">
                <UserRound className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">For Donors</h3>
            <p className="text-muted-foreground mb-4">
              Make a difference by contributing directly to verified institutes and
              track your impact.
            </p>
            <Button variant="link" className="p-0">
              Register as Donor <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary-100 text-primary flex items-center justify-center">
                <Store className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">For Suppliers</h3>
            <p className="text-muted-foreground mb-4">
              Connect with local institutes and fulfill their needs while growing
              your business.
            </p>
            <Button variant="link" className="p-0">
              Register as Supplier <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Card>
        </section>

        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-muted-foreground mb-8">
            Join our community of changemakers and help create a more transparent
            and efficient way of giving.
          </p>
          <Button size="lg">
            Start Your Journey
          </Button>
        </section>

        {/* Integrate Chatbot Here */}
        <Chatbot />

      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 ConnectaHero. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
