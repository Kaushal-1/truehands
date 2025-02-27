
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const mockDonations = [
  {
    id: 1,
    donor: "John Doe",
    amount: "$500",
    date: "2024-02-15",
    items: "Rice (25kg), Dal (10kg)",
    status: "Received"
  },
  {
    id: 2,
    donor: "Sarah Williams",
    amount: "$300",
    date: "2024-02-14",
    items: "Vegetables (15kg), Fruits (10kg)",
    status: "Received"
  },
  {
    id: 3,
    donor: "Anonymous",
    amount: "$1000",
    date: "2024-02-13",
    items: "Mixed groceries",
    status: "Processing"
  },
  {
    id: 4,
    donor: "Michael Johnson",
    amount: "$750",
    date: "2024-02-12",
    items: "Milk (20L), Bread (30 loaves)",
    status: "Received"
  },
  {
    id: 5,
    donor: "Emily Brown",
    amount: "$450",
    date: "2024-02-11",
    items: "Cooking oil (10L), Sugar (15kg)",
    status: "Processing"
  }
];

const DonationHistory = () => {
  return (
    <div className="p-8 ml-64">
      <Card>
        <CardHeader className="space-y-4">
          <CardTitle className="text-2xl">Donation History</CardTitle>
          <Input
            placeholder="Search donations..."
            className="max-w-sm"
          />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockDonations.map((donation) => (
              <div
                key={donation.id}
                className="p-4 bg-secondary rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{donation.donor}</h3>
                    <span className="text-sm text-muted-foreground">• {donation.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{donation.items}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-primary">{donation.amount}</span>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    donation.status === "Received"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {donation.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationHistory;
