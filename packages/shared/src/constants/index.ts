export const ROLES = {
  STUDENT: "student",
  INDUSTRY: "industry",
  ACADEMICIAN: "academician",
  INSTITUTION: "institution",
  ADMIN: "admin",
} as const;

export const VERIFICATION_STATUS = {
  PENDING: "pending",
  VERIFIED: "verified",
  REJECTED: "rejected",
  SUSPENDED: "suspended",
} as const;

export const OPPORTUNITY_VISIBILITY = {
  OPEN: "open",
  SELECTED_UNIVERSITIES: "selected_universities",
  CAMPUS_DRIVE: "campus_drive",
} as const;
