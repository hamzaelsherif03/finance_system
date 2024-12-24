import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Mock current user for demonstration
const currentUser = {
  id: 1,
  name: "John Smith",
  role: "Financial Staff" as const, // This would come from your auth system
};

// Mock data
const mockBonusStats = {
  totalRequests: 150,
  approvedRequests: 100,
  pendingRequests: 30,
  rejectedRequests: 20,
  totalAmount: 750000,
};

const mockMonthlyData = [
  { month: "January", requests: 15, approved: 12, amount: 75000 },
  { month: "February", requests: 18, approved: 15, amount: 90000 },
  { month: "March", requests: 20, approved: 17, amount: 85000 },
];

const FinancialStaffReports = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Overview Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Requests</p>
            <p className="text-2xl font-bold">{mockBonusStats.totalRequests}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Approved</p>
            <p className="text-2xl font-bold">{mockBonusStats.approvedRequests}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold">{mockBonusStats.pendingRequests}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Amount</p>
            <p className="text-2xl font-bold">${mockBonusStats.totalAmount.toLocaleString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Monthly Report</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead>Total Requests</TableHead>
              <TableHead>Approved</TableHead>
              <TableHead>Total Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockMonthlyData.map((month) => (
              <TableRow key={month.month}>
                <TableCell>{month.month}</TableCell>
                <TableCell>{month.requests}</TableCell>
                <TableCell>{month.approved}</TableCell>
                <TableCell>${month.amount.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

const ManagerReports = () => {
  // Mock data for manager's personal stats
  const personalStats = {
    totalRequests: 12,
    approvedRequests: 8,
    pendingRequests: 2,
    rejectedRequests: 2,
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Bonus Request Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Requests</p>
              <p className="text-2xl font-bold">{personalStats.totalRequests}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Approved</p>
              <p className="text-2xl font-bold">{personalStats.approvedRequests}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-bold">{personalStats.pendingRequests}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Rejected</p>
              <p className="text-2xl font-bold">{personalStats.rejectedRequests}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Reports = () => {
  return (
    <div className="animate-in">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Reports</h1>
      </div>

      {currentUser.role === "Financial Staff" ? (
        <FinancialStaffReports />
      ) : (
        <ManagerReports />
      )}
    </div>
  );
};

export default Reports;