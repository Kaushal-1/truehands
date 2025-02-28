
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

interface Order {
  id: number;
  institute: string;
  items: string;
  value: string;
  date: string;
  status: "New" | "Viewed";
}

const orders: Order[] = [
  {
    id: 1,
    institute: "Orphanage A",
    items: "Rice (25kg), Flour (10kg), Oil (5L)",
    value: "$75",
    date: "2023-09-15",
    status: "New",
  },
  {
    id: 2,
    institute: "Elderly Home B",
    items: "Fresh Vegetables, Milk (20L), Fruits",
    value: "$45",
    date: "2023-09-16",
    status: "New",
  },
  {
    id: 3,
    institute: "Children's Shelter C",
    items: "School supplies, Clothes, Toys",
    value: "$60",
    date: "2023-09-14",
    status: "Viewed",
  },
];

const ReceiveOrders = () => {
  const handleViewOrder = (id: number) => {
    toast.success(`Order #${id} marked as viewed`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Receive Orders</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>New Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">ID</TableHead>
                <TableHead>Institute</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
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
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <span 
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === "New" 
                          ? "bg-blue-100 text-blue-800" 
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {order.status === "New" ? (
                      <Button 
                        onClick={() => handleViewOrder(order.id)}
                        className="bg-blue-500 hover:bg-blue-600"
                      >
                        View Details
                      </Button>
                    ) : (
                      <Button 
                        disabled
                        variant="outline"
                      >
                        Viewed
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

export default ReceiveOrders;
