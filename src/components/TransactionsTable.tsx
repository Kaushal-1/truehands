
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Transaction {
  id: number;
  donor: string;
  amount: string;
  institute: string;
  status: "Completed" | "Pending";
}

const transactions: Transaction[] = [
  {
    id: 1,
    donor: "John Doe",
    amount: "$100",
    institute: "Orphanage A",
    status: "Completed",
  },
  {
    id: 2,
    donor: "Jane Smith",
    amount: "$50",
    institute: "Elderly Home B",
    status: "Pending",
  },
];

const TransactionsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">ID</TableHead>
          <TableHead>Donor</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Institute</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.id}</TableCell>
            <TableCell>{transaction.donor}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.institute}</TableCell>
            <TableCell>
              <Badge variant={transaction.status === "Completed" ? "default" : "outline"} className={transaction.status === "Completed" ? "bg-green-500 hover:bg-green-600" : ""}>
                {transaction.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
