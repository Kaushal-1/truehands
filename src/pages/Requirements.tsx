
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";

const mockRequirements = [
  { id: 1, item: "Rice", quantity: "50kg", date: "2024-02-15", status: "pending" },
  { id: 2, item: "Milk", quantity: "20L", date: "2024-02-14", status: "fulfilled" },
  { id: 3, item: "Vegetables", quantity: "30kg", date: "2024-02-13", status: "pending" },
  { id: 4, item: "Fruits", quantity: "25kg", date: "2024-02-12", status: "fulfilled" },
  { id: 5, item: "Bread", quantity: "40 loaves", date: "2024-02-11", status: "pending" },
];

const Requirements = () => {
  return (
    <div className="p-8 ml-64">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">Requirements List</CardTitle>
          <Button asChild>
            <a href="/institute/add-requirement">Add New Requirement</a>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRequirements.map((req) => (
              <div
                key={req.id}
                className="flex items-center justify-between p-4 bg-secondary rounded-lg"
              >
                <div className="space-y-1">
                  <p className="font-medium">{req.item}</p>
                  <p className="text-sm text-muted-foreground">Quantity: {req.quantity}</p>
                  <p className="text-sm text-muted-foreground">Added: {req.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      req.status === "fulfilled"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {req.status}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="text-red-500 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Requirements;
