
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
  status: "Pending" | "Confirmed" | "Rejected";
}

const orders: Order[] = [
  {
    id: 1,
    institute: "Orphanage A",
    items: "Rice (25kg), Flour (10kg), Oil (5L)",
    value: "$75",
    date: "2023-09-15",
    status: "Pending",
  },
  {
    id: 2,
    institute: "Elderly Home B",
    items: "Fresh Vegetables, Milk (20L), Fruits",
    value: "$45",
    date: "2023-09-16",
    status: "Pending",
  },
  {
    id: 3,
    institute: "Children's Shelter C",
    items: "School supplies, Clothes, Toys",
    value: "$60",
    date: "2023-09-14",
    status: "Confirmed",
  },
  {
    id: 4,
    institute: "School D",
    items: "Books, Stationery",
    value: "$35",
    date: "2023-09-13",
    status: "Rejected",
  },
];

const ConfirmOrders = () => {
  const handleConfirmOrder = (id: number) => {
    toast.success(`Order #${id} confirmed`);
  };

  const handleRejectOrder = (id: number) => {
    toast.error(`Order #${id} rejected`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Confirm Orders</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Orders Requiring Confirmation</CardTitle>
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
                        order.status === "Pending" 
                          ? "bg-yellow-100 text-yellow-800" 
                          : order.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {order.status === "Pending" ? (
                      <div className="flex space-x-2">
                        <Button 
                          onClick={() => handleConfirmOrder(order.id)}
                          className="bg-green-500 hover:bg-green-600"
                          size="sm"
                        >
                          Confirm
                        </Button>
                        <Button 
                          onClick={() => handleRejectOrder(order.id)}
                          variant="destructive"
                          size="sm"
                        >
                          Reject
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        disabled
                        variant="outline"
                      >
                        {order.status}
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

export default ConfirmOrders;
