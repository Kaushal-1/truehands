
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PreviousRequirement {
  id: number;
  institute: string;
  items: string;
  status: "Fulfilled" | "Partially Fulfilled";
  donationDate: string;
}

const previousRequirements: PreviousRequirement[] = [
  {
    id: 1,
    institute: "Orphanage A",
    items: "Rice (25kg), Flour (10kg), Oil (5L)",
    status: "Fulfilled",
    donationDate: "2023-06-15",
  },
  {
    id: 2,
    institute: "Elderly Home B",
    items: "Fresh Vegetables, Milk (20L)",
    status: "Partially Fulfilled",
    donationDate: "2023-05-22",
  },
  {
    id: 3,
    institute: "Children's Shelter C",
    items: "School supplies, Clothes",
    status: "Fulfilled",
    donationDate: "2023-04-10",
  },
];

const PreviousRequirements = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Previous Requirements</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Past Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">ID</TableHead>
                <TableHead>Institute</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Donation Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {previousRequirements.map((req) => (
                <TableRow key={req.id}>
                  <TableCell className="font-medium">{req.id}</TableCell>
                  <TableCell>{req.institute}</TableCell>
                  <TableCell>{req.items}</TableCell>
                  <TableCell>
                    <span 
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        req.status === "Fulfilled" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {req.status}
                    </span>
                  </TableCell>
                  <TableCell>{req.donationDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreviousRequirements;
