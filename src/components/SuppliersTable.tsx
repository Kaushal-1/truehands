
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Supplier {
  id: number;
  name: string;
  location: string;
  rating: number;
}

const suppliers: Supplier[] = [
  {
    id: 1,
    name: "Grocery Store X",
    location: "City A",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Supermarket Y",
    location: "City B",
    rating: 3.8,
  },
];

const SuppliersTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Rating</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {suppliers.map((supplier) => (
          <TableRow key={supplier.id}>
            <TableCell className="font-medium">{supplier.id}</TableCell>
            <TableCell>{supplier.name}</TableCell>
            <TableCell>{supplier.location}</TableCell>
            <TableCell>{supplier.rating}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SuppliersTable;
