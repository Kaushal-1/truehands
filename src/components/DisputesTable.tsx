
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Dispute {
  id: number;
  institute: string;
  issue: string;
  status: "Open" | "Resolved";
}

const disputes: Dispute[] = [
  {
    id: 1,
    institute: "Orphanage A",
    issue: "Delayed delivery",
    status: "Open",
  },
  {
    id: 2,
    institute: "Elderly Home B",
    issue: "Poor quality items",
    status: "Resolved",
  },
];

const DisputesTable = () => {
  const handleResolve = (id: number) => {
    toast.success(`Dispute #${id} marked as resolved`);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">ID</TableHead>
          <TableHead>Institute</TableHead>
          <TableHead>Issue</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {disputes.map((dispute) => (
          <TableRow key={dispute.id}>
            <TableCell className="font-medium">{dispute.id}</TableCell>
            <TableCell>{dispute.institute}</TableCell>
            <TableCell>{dispute.issue}</TableCell>
            <TableCell>{dispute.status}</TableCell>
            <TableCell>
              {dispute.status === "Open" ? (
                <Button 
                  onClick={() => handleResolve(dispute.id)}
                  className="bg-purple-500 hover:bg-purple-600 text-white"
                >
                  Resolve
                </Button>
              ) : (
                <Button variant="outline" disabled className="bg-gray-200">
                  Resolved
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DisputesTable;
