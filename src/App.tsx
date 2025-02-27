
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import InstituteDashboard from "./pages/InstituteDashboard";
import Requirements from "./pages/Requirements";
import AddRequirement from "./pages/AddRequirement";
import NearbyShops from "./pages/NearbyShops";
import DonationHistory from "./pages/DonationHistory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/institute/dashboard" element={<InstituteDashboard />} />
          <Route path="/institute/requirements" element={<Requirements />} />
          <Route path="/institute/add-requirement" element={<AddRequirement />} />
          <Route path="/institute/shops" element={<NearbyShops />} />
          <Route path="/institute/donations" element={<DonationHistory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
