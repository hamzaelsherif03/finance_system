export type UserRole = "Financial Staff" | "Manager";
export type UserStatus = "Active" | "Inactive";
export type UserTitle = "Dr." | "Student" | "Staff";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}

export interface BonusRequest {
  id: number;
  title: string;
  recipientName: string;
  recipientTitle: UserTitle;
  amount: number;
  status: "Pending" | "Approved" | "Rejected";
  submittedAt: string;
  submittedBy: string;
  submittedById: string;
  reason: string;
  attachments: string[];
}