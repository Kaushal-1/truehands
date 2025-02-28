
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransactionsTable from "@/components/TransactionsTable";
import AnomaliesTable from "@/components/AnomaliesTable";
import SuppliersTable from "@/components/SuppliersTable";
import DisputesTable from "@/components/DisputesTable";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Index = () => {
  const handleDetectAnomalies = () => {
    toast.success("Scanning for anomalies...");
  };

  const handleRotateSuppliers = () => {
    toast.success("Supplier rotation scheduled");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Admin Dashboard</h1>
            <div className="flex space-x-4">
              {/* <Link to="/donor">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Donor Dashboard
                </Button>
              </Link>
              <Link to="/supplier">
                <Button className="bg-green-500 hover:bg-green-600">
                  Supplier Dashboard
                </Button>
              </Link> */}
            </div>
          </div>

          <Tabs defaultValue="transactions" className="space-y-4">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
              <TabsTrigger value="disputes">Disputes</TabsTrigger>
            </TabsList>

            <TabsContent value="transactions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Monitor Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <TransactionsTable />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="anomalies" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Flag Anomalies</CardTitle>
                  <Button 
                    onClick={handleDetectAnomalies}
                    className="bg-red-400 hover:bg-red-500"
                  >
                    Detect Anomalies
                  </Button>
                </CardHeader>
                <CardContent>
                  <AnomaliesTable />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="suppliers" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Manage Suppliers</CardTitle>
                  <Button 
                    onClick={handleRotateSuppliers}
                    className="bg-teal-400 hover:bg-teal-500 text-white"
                  >
                    Rotate Suppliers
                  </Button>
                </CardHeader>
                <CardContent>
                  <SuppliersTable />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="disputes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Resolve Disputes</CardTitle>
                </CardHeader>
                <CardContent>
                  <DisputesTable />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
