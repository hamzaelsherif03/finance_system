import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";
import { BonusRequest } from "@/types/users";

const mockData: BonusRequest[] = [
  {
    id: 1,
    title: "Performance Bonus",
    recipientName: "Dr. John Smith",
    recipientTitle: "Dr.",
    amount: 5000,
    status: "Pending",
    submittedAt: "2024-02-20",
    submittedBy: "Manager Alice",
    submittedById: "2",
    reason: "Exceptional performance in Q1",
    attachments: ["performance_review.pdf"],
  },
  {
    id: 2,
    title: "Research Grant",
    recipientName: "Sarah Johnson",
    recipientTitle: "Student",
    amount: 7500,
    status: "Approved",
    submittedAt: "2024-02-19",
    submittedBy: "Manager Bob",
    submittedById: "3",
    reason: "Leading breakthrough research project",
    attachments: ["research_proposal.pdf", "budget.xlsx"],
  },
  {
    id: 3,
    title: "Project Completion Bonus",
    recipientName: "Mike Wilson",
    recipientTitle: "Staff",
    amount: 3000,
    status: "Pending",
    submittedAt: "2024-02-21",
    submittedBy: "Manager Alice",
    submittedById: "2",
    reason: "Successfully delivered project ahead of schedule",
    attachments: ["project_report.pdf"],
  }
];

export function BonusTable() {
  const { toast } = useToast();
  const userRole = localStorage.getItem("userRole");
  const userId = localStorage.getItem("userId");

  const handleApprove = (id: number) => {
    toast({
      title: "Bonus Request Approved",
      description: "The bonus request has been approved successfully.",
    });
  };

  const handleReject = (id: number) => {
    toast({
      title: "Bonus Request Rejected",
      description: "The bonus request has been rejected.",
    });
  };

  // Filter bonuses based on user role and ID
  const filteredBonuses = userRole === "Manager"
    ? mockData.filter(bonus => bonus.submittedById === userId)
    : mockData;

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Recipient</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            {userRole === "Financial Staff" && (
              <>
                <TableHead>Submitted By</TableHead>
                <TableHead>Actions</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredBonuses.map((bonus) => (
            <TableRow key={bonus.id}>
              <TableCell>{bonus.submittedAt}</TableCell>
              <TableCell className="font-medium">{bonus.title}</TableCell>
              <TableCell>{bonus.recipientName}</TableCell>
              <TableCell>${bonus.amount.toLocaleString()}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    bonus.status === "Approved"
                      ? "secondary"
                      : bonus.status === "Rejected"
                      ? "destructive"
                      : "default"
                  }
                >
                  {bonus.status}
                </Badge>
              </TableCell>
              {userRole === "Financial Staff" && (
                <>
                  <TableCell>{bonus.submittedBy}</TableCell>
                  <TableCell>
                    {bonus.status === "Pending" && (
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleApprove(bonus.id)}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleReject(bonus.id)}
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}