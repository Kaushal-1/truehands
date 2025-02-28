
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Payment {
  id: number;
  institute: string;
  items: string;
  amount: string;
  status: "Pending" | "Processing" | "Completed";
  date: string;
}

const payments: Payment[] = [
  {
    id: 1,
    institute: "Orphanage A",
    items: "Rice, Flour, Oil",
    amount: "$75",
    status: "Completed",
    date: "2023-09-10",
  },
  {
    id: 2,
    institute: "Elderly Home B",
    items: "Vegetables, Milk, Fruits",
    amount: "$45",
    status: "Processing",
    date: "2023-09-15",
  },
  {
    id: 3,
    institute: "Children's Shelter C",
    items: "School supplies, Toys",
    amount: "$60",
    status: "Pending",
    date: "2023-09-16",
  },
];

const PaymentTracking = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Payment Tracking</h2>
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Payment Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-green-50 p-4">
              <div className="text-sm font-medium text-green-600">Completed Payments</div>
              <div className="mt-2 text-3xl font-bold text-green-900">$125</div>
            </div>
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="text-sm font-medium text-blue-600">Processing Payments</div>
              <div className="mt-2 text-3xl font-bold text-blue-900">$45</div>
            </div>
            <div className="rounded-lg bg-yellow-50 p-4">
              <div className="text-sm font-medium text-yellow-600">Pending Payments</div>
              <div className="mt-2 text-3xl font-bold text-yellow-900">$60</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="all">All Payments</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>All Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">ID</TableHead>
                    <TableHead>Institute</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.institute}</TableCell>
                      <TableCell>{payment.items}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>
                        <span 
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            payment.status === "Completed" 
                              ? "bg-green-100 text-green-800" 
                              : payment.status === "Processing"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {payment.status}
                        </span>
                      </TableCell>
                      <TableCell>{payment.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pending" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending & Processing Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">ID</TableHead>
                    <TableHead>Institute</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.filter(p => p.status !== "Completed").map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.institute}</TableCell>
                      <TableCell>{payment.items}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>
                        <span 
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            payment.status === "Processing"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {payment.status}
                        </span>
                      </TableCell>
                      <TableCell>{payment.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">ID</TableHead>
                    <TableHead>Institute</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.filter(p => p.status === "Completed").map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.institute}</TableCell>
                      <TableCell>{payment.items}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentTracking;
