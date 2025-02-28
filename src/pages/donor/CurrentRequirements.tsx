
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

interface Requirement {
  id: number;
  institute: string;
  items: string;
  priority: "High" | "Medium" | "Low";
}

const requirements: Requirement[] = [
  {
    id: 1,
    institute: "Orphanage A",
    items: "Rice (25kg), Flour (10kg), Oil (5L)",
    priority: "High",
  },
  {
    id: 2,
    institute: "Elderly Home B",
    items: "Fresh Vegetables, Milk (20L), Fruits",
    priority: "Medium",
  },
  {
    id: 3,
    institute: "Children's Shelter C",
    items: "School supplies, Clothes, Toys",
    priority: "Low",
  },
];

const CurrentRequirements = () => {
  const handleDonate = (id: number) => {
    toast.success(`Donation process started for requirement #${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Current Requirements</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Browse Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">ID</TableHead>
                <TableHead>Institute</TableHead>
                <TableHead>Items Needed</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requirements.map((req) => (
                <TableRow key={req.id}>
                  <TableCell className="font-medium">{req.id}</TableCell>
                  <TableCell>{req.institute}</TableCell>
                  <TableCell>{req.items}</TableCell>
                  <TableCell>
                    <span 
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        req.priority === "High" 
                          ? "bg-red-100 text-red-800" 
                          : req.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {req.priority}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button 
                      onClick={() => handleDonate(req.id)}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      Donate Now
                    </Button>
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

export default CurrentRequirements;
