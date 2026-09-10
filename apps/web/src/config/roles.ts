import type { PublicSignupRole } from "@/features/auth/types/auth.types";

export interface RoleMeta {
  role: PublicSignupRole;
  label: string;
  shortLabel: string;
  tagline: string;
  description: string;
  signupFields: string[];
}

export const ROLE_META: Record<PublicSignupRole, RoleMeta> = {
  student: {
    role: "student",
    label: "Student",
    shortLabel: "Students",
    tagline: "Turn skills into opportunities",
    description:
      "Build your skill profile, identify gaps, and find internships and placements that match where you're headed.",
    signupFields: ["Full Name", "Email", "Password", "Institution", "Program", "Branch", "Graduation Year"],
  },
  industry: {
    role: "industry",
    label: "Industry",
    shortLabel: "Industry",
    tagline: "Find the talent your team needs",
    description:
      "Post opportunities, discover relevant talent, and collaborate with institutions on programs that build the workforce you need.",
    signupFields: ["Company Name", "Email", "Password", "Sector", "Website", "Contact Person"],
  },
  academician: {
    role: "academician",
    label: "Academician",
    shortLabel: "Academicians",
    tagline: "Bridge teaching and industry",
    description:
      "Mentor students, develop alongside industry, and pursue research and collaboration opportunities with real-world impact.",
    signupFields: ["Full Name", "Email", "Password", "Institution", "Department", "Designation", "Expertise"],
  },
  institution: {
    role: "institution",
    label: "Institution",
    shortLabel: "Institutions",
    tagline: "Connect your campus to industry",
    description:
      "Verify your ecosystem, track students and faculty, monitor placements, and build partnerships with industry partners.",
    signupFields: ["Institution Name", "Email", "Password", "Institution Type", "Website", "Contact Person"],
  },
};

export const PUBLIC_SIGNUP_ROLES = Object.values(ROLE_META).map((meta) => meta.role);