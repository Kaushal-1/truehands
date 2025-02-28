
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Donation {
  id: number;
  institute: string;
  items: string;
  value: string;
  date: string;
  status: "Delivered" | "In Transit" | "Processing";
  feedback?: string;
}

const donations: Donation[] = [
  {
    id: 1,
    institute: "Orphanage A",
    items: "Rice (25kg), Flour (10kg)",
    value: "$75",
    date: "2023-06-15",
    status: "Delivered",
    feedback: "Thank you for your generous donation! The children were very happy."
  },
  {
    id: 2,
    institute: "Elderly Home B",
    items: "Fresh Vegetables, Milk (20L)",
    value: "$45",
    date: "2023-07-22",
    status: "In Transit"
  },
  {
    id: 3,
    institute: "Children's Shelter C",
    items: "School supplies",
    value: "$30",
    date: "2023-08-10",
    status: "Processing"
  },
];

const DonationHistory = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Donation History</h2>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="all">All Donations</TabsTrigger>
          <TabsTrigger value="active">Active Donations</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>All Donations</CardTitle>
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
                    <TableHead>Feedback</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donations.map((donation) => (
                    <TableRow key={donation.id}>
                      <TableCell className="font-medium">{donation.id}</TableCell>
                      <TableCell>{donation.institute}</TableCell>
                      <TableCell>{donation.items}</TableCell>
                      <TableCell>{donation.value}</TableCell>
                      <TableCell>{donation.date}</TableCell>
                      <TableCell>
                        <span 
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            donation.status === "Delivered" 
                              ? "bg-green-100 text-green-800" 
                              : donation.status === "In Transit"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {donation.status}
                        </span>
                      </TableCell>
                      <TableCell>{donation.feedback || "No feedback yet"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="active" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Donations</CardTitle>
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
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donations.filter(d => d.status !== "Delivered").map((donation) => (
                    <TableRow key={donation.id}>
                      <TableCell className="font-medium">{donation.id}</TableCell>
                      <TableCell>{donation.institute}</TableCell>
                      <TableCell>{donation.items}</TableCell>
                      <TableCell>{donation.value}</TableCell>
                      <TableCell>{donation.date}</TableCell>
                      <TableCell>
                        <span 
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            donation.status === "In Transit"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {donation.status}
                        </span>
                      </TableCell>
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
              <CardTitle>Completed Donations</CardTitle>
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
                    <TableHead>Feedback</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donations.filter(d => d.status === "Delivered").map((donation) => (
                    <TableRow key={donation.id}>
                      <TableCell className="font-medium">{donation.id}</TableCell>
                      <TableCell>{donation.institute}</TableCell>
                      <TableCell>{donation.items}</TableCell>
                      <TableCell>{donation.value}</TableCell>
                      <TableCell>{donation.date}</TableCell>
                      <TableCell>{donation.feedback || "No feedback yet"}</TableCell>
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

export default DonationHistory;
