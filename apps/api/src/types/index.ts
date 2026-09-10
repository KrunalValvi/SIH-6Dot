export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export type UserRole =
  | "student"
  | "industry"
  | "academician"
  | "institution"
  | "admin";

export type VerificationStatus =
  | "pending"
  | "verified"
  | "rejected"
  | "suspended";
