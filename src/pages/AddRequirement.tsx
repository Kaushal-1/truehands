
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddRequirement = () => {
  const [formData, setFormData] = useState({
    item: "",
    quantity: "",
    description: "",
    urgency: "normal"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Requirement added:", formData);
    // Add backend integration here
  };

  return (
    <div className="p-8 ml-64">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-4">
            <Link
              to="/institute/requirements"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Requirements
            </Link>
          </div>
          <CardTitle className="text-2xl">Add New Requirement</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="item">Item Name</Label>
              <Input
                id="item"
                value={formData.item}
                onChange={(e) => setFormData({ ...formData, item: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full">
              Add Requirement
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddRequirement;
