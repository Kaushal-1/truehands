
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  List, 
  Plus, 
  Store, 
  History, 
  LogOut, 
  Package, 
  DollarSign 
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for demonstration
const mockRequirements = [
  { id: 1, item: "Rice", quantity: "50kg", status: "pending" },
  { id: 2, item: "Milk", quantity: "20L", status: "fulfilled" },
  { id: 3, item: "Vegetables", quantity: "30kg", status: "pending" },
];

const mockShops = [
  { id: 1, name: "City Grocers", rating: 4.5, distance: "1.2km" },
  { id: 2, name: "Fresh Foods Market", rating: 4.8, distance: "2.5km" },
  { id: 3, name: "Daily Needs Store", rating: 4.2, distance: "0.8km" },
];

const mockDonations = [
  { id: 1, donor: "John Doe", amount: "$500", date: "2024-02-15", items: "Rice, Dal" },
  { id: 2, donor: "Jane Smith", amount: "$300", date: "2024-02-14", items: "Vegetables" },
  { id: 3, donor: "Anonymous", amount: "$1000", date: "2024-02-13", items: "Mixed groceries" },
];

const InstituteDashboard = () => {
  return (
    <div className="min-h-screen bg-secondary-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r shadow-sm">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">Hope Orphanage</span>
          </div>
        </div>
        <nav className="p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/institute/requirements">
              <List className="mr-2 h-4 w-4" />
              Requirements
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/institute/add-requirement">
              <Plus className="mr-2 h-4 w-4" />
              Add Requirement
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/institute/shops">
              <Store className="mr-2 h-4 w-4" />
              Nearby Shops
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/institute/donations">
              <History className="mr-2 h-4 w-4" />
              Donation History
            </Link>
          </Button>
          <div className="pt-4 mt-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Requirements</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                4 pending approval
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,850</div>
              <p className="text-xs text-muted-foreground">
                +20% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Connected Shops</CardTitle>
              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                3 new this month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRequirements.map((req) => (
                  <div key={req.id} className="flex items-center justify-between p-2 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">{req.item}</p>
                      <p className="text-sm text-muted-foreground">{req.quantity}</p>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      req.status === "fulfilled" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {req.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockDonations.map((donation) => (
                  <div key={donation.id} className="flex items-center justify-between p-2 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">{donation.donor}</p>
                      <p className="text-sm text-muted-foreground">{donation.items}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{donation.amount}</p>
                      <p className="text-sm text-muted-foreground">{donation.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Nearby Shops</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockShops.map((shop) => (
                  <div key={shop.id} className="flex items-center justify-between p-2 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">{shop.name}</p>
                      <p className="text-sm text-muted-foreground">Distance: {shop.distance}</p>
                    </div>
                    <div className="text-sm text-primary font-medium">
                      ★ {shop.rating}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default InstituteDashboard;
