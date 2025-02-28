
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

interface Order {
  id: number;
  institute: string;
  items: string;
  value: string;
  status: "Packing" | "Ready" | "Shipped";
  estimatedDelivery?: string;
}

const orders: Order[] = [
  {
    id: 1,
    institute: "Orphanage A",
    items: "Rice (25kg), Flour (10kg), Oil (5L)",
    value: "$75",
    status: "Packing",
  },
  {
    id: 2,
    institute: "Elderly Home B",
    items: "Fresh Vegetables, Milk (20L), Fruits",
    value: "$45",
    status: "Ready",
  },
  {
    id: 3,
    institute: "Children's Shelter C",
    items: "School supplies, Clothes, Toys",
    value: "$60",
    status: "Shipped",
    estimatedDelivery: "2023-09-18",
  },
];

const ShipItems = () => {
  const handleMarkReady = (id: number) => {
    toast.success(`Order #${id} marked as ready for shipping`);
  };

  const handleShip = (id: number) => {
    toast.success(`Order #${id} marked as shipped`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Ship Items</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Order Shipping Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">ID</TableHead>
                <TableHead>Institute</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Est. Delivery</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.institute}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>{order.value}</TableCell>
                  <TableCell>
                    <span 
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === "Packing" 
                          ? "bg-yellow-100 text-yellow-800" 
                          : order.status === "Ready"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>{order.estimatedDelivery || "N/A"}</TableCell>
                  <TableCell>
                    {order.status === "Packing" ? (
                      <Button 
                        onClick={() => handleMarkReady(order.id)}
                        className="bg-blue-500 hover:bg-blue-600"
                      >
                        Mark Ready
                      </Button>
                    ) : order.status === "Ready" ? (
                      <Button 
                        onClick={() => handleShip(order.id)}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Ship Now
                      </Button>
                    ) : (
                      <Button 
                        disabled
                        variant="outline"
                      >
                        Shipped
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShipItems;
