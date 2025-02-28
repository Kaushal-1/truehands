
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

// donor

import DonorDashboard from "./pages/donor/DonorDashboard";
import CurrentRequirements from "./pages/donor/CurrentRequirements";
import PreviousRequirements from "./pages/donor/PreviousRequirements";
import DonationHistory from "./pages/donor/DonationHistory";

// suppiler
import SupplierDashboard from "./pages/supplier/SupplierDashboard";
import ReceiveOrders from "./pages/supplier/ReceiveOrders";
import ConfirmOrders from "./pages/supplier/ConfirmOrders";
import ShipItems from "./pages/supplier/ShipItems";
import PaymentTracking from "./pages/supplier/PaymentTracking";


import Index1 from "./pages/Index1";
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
          {/* <Route path="/institute/donor/CurrentRequirements" element={<DonorDash />} /> */}
          <Route path="/institute/requirements" element={<Requirements />} />
          <Route path="/institute/add-requirement" element={<AddRequirement />} />
          <Route path="/institute/shops" element={<NearbyShops />} />
          {/* <Route path="/institute/donations" element={<DonationHistory />} /> */}
          {/* <Route path="/institute/AdminDash" element={<AdminDash />} /> */}        
          <Route path="/institute/AdminDash" element={<Index1 />} />


          {/* Donor Dashboard Routes */}
          <Route path="/donor" element={<DonorDashboard />}>
            <Route index element={<CurrentRequirements />} />
            <Route path="current-requirements" element={<CurrentRequirements />} />
            <Route path="previous-requirements" element={<PreviousRequirements />} />
            <Route path="donation-history" element={<DonationHistory />} />
          </Route>
          
          {/* Supplier Dashboard Routes */}
          <Route path="/supplier" element={<SupplierDashboard />}>
            <Route index element={<ReceiveOrders />} />
            <Route path="receive-orders" element={<ReceiveOrders />} />
            <Route path="confirm-orders" element={<ConfirmOrders />} />
            <Route path="ship-items" element={<ShipItems />} />
            <Route path="payment-tracking" element={<PaymentTracking />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
