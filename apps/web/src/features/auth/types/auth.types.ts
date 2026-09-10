import type { UserRole } from "@/types";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface BaseSignupData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface StudentSignupData extends BaseSignupData {
  role: "student";
  fullName: string;
  institution: string;
  program: string;
  branch: string;
  graduationYear: string;
}

export interface IndustrySignupData extends BaseSignupData {
  role: "industry";
  companyName: string;
  industrySector: string;
  website?: string;
  contactPerson: string;
  contactInformation: string;
  authorizationDocument?: File | null;
}

export interface AcademicianSignupData extends BaseSignupData {
  role: "academician";
  fullName: string;
  institution: string;
  department: string;
  designation: string;
  expertise: string;
}

export interface InstitutionSignupData extends BaseSignupData {
  role: "institution";
  institutionName: string;
  institutionType: string;
  website?: string;
  contactPerson: string;
  contactInformation: string;
  verificationDocument?: File | null;
}

export type SignupData =
  | StudentSignupData
  | IndustrySignupData
  | AcademicianSignupData
  | InstitutionSignupData;

export type PublicSignupRole = Exclude<UserRole, "admin">;

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: {
    id: string;
    email: string;
    role: UserRole;
  };
}

export interface SignupResult {
  success: boolean;
  message: string;
}