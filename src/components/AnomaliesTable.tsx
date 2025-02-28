
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Anomaly {
  id: number;
  institute: string;
  issue: string;
}

const anomalies: Anomaly[] = [
  {
    id: 1,
    institute: "Orphanage A",
    issue: "Unusual consumption of rice",
  },
  {
    id: 2,
    institute: "Elderly Home B",
    issue: "Excessive milk orders",
  },
];

const AnomaliesTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">ID</TableHead>
          <TableHead>Institute</TableHead>
          <TableHead>Issue</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {anomalies.map((anomaly) => (
          <TableRow key={anomaly.id}>
            <TableCell className="font-medium">{anomaly.id}</TableCell>
            <TableCell>{anomaly.institute}</TableCell>
            <TableCell>{anomaly.issue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AnomaliesTable;
