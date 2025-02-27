
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Star } from "lucide-react";

const mockShops = [
  { 
    id: 1, 
    name: "Fresh Mart Groceries",
    rating: 4.5,
    distance: "0.8km",
    address: "123 Market Street",
    phone: "+1 234-567-8901",
    type: "Grocery Store"
  },
  { 
    id: 2, 
    name: "Metro Supermarket",
    rating: 4.8,
    distance: "1.2km",
    address: "456 Main Avenue",
    phone: "+1 234-567-8902",
    type: "Supermarket"
  },
  { 
    id: 3, 
    name: "Daily Needs Store",
    rating: 4.2,
    distance: "1.5km",
    address: "789 Oak Road",
    phone: "+1 234-567-8903",
    type: "General Store"
  },
  { 
    id: 4, 
    name: "City Grocers",
    rating: 4.6,
    distance: "2.0km",
    address: "321 Pine Street",
    phone: "+1 234-567-8904",
    type: "Grocery Store"
  },
  { 
    id: 5, 
    name: "Value Mart",
    rating: 4.3,
    distance: "2.5km",
    address: "654 Elm Boulevard",
    phone: "+1 234-567-8905",
    type: "Supermarket"
  }
];

const NearbyShops = () => {
  return (
    <div className="p-8 ml-64">
      <Card>
        <CardHeader className="space-y-4">
          <CardTitle className="text-2xl">Nearby Shops</CardTitle>
          <Input
            placeholder="Search shops..."
            className="max-w-sm"
          />
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {mockShops.map((shop) => (
              <div
                key={shop.id}
                className="p-4 bg-secondary rounded-lg space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{shop.name}</h3>
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="h-4 w-4 fill-primary" />
                    <span>{shop.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{shop.type}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{shop.distance} • {shop.address}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    <span>{shop.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NearbyShops;
