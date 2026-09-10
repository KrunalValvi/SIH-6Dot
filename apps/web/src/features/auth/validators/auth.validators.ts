import type { BaseSignupData } from "../types/auth.types";

export const VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: "Email is required.",
  EMAIL_INVALID: "Please enter a valid email address.",
  EMAIL_INSTITUTIONAL:
    "Please use an official institutional email address.",
  PASSWORD_REQUIRED: "Password is required.",
  PASSWORD_MIN: "Password must be at least 8 characters.",
  PASSWORD_MATCH: "Passwords do not match.",
  NAME_REQUIRED: "This field is required.",
  INSTITUTION_REQUIRED: "Institution is required.",
  PROGRAM_REQUIRED: "Program / degree is required.",
  BRANCH_REQUIRED: "Branch / field is required.",
  GRADUATION_YEAR_REQUIRED: "Graduation year is required.",
  GRADUATION_YEAR_INVALID: "Graduation year is invalid.",
  COMPANY_NAME_REQUIRED: "Company name is required.",
  INDUSTRY_SECTOR_REQUIRED: "Industry / sector is required.",
  INSTITUTION_TYPE_REQUIRED: "Institution type is required.",
  CONTACT_PERSON_REQUIRED: "Contact person is required.",
  CONTACT_INFORMATION_REQUIRED: "Contact information is required.",
  DEPARTMENT_REQUIRED: "Department is required.",
  DESIGNATION_REQUIRED: "Designation is required.",
  EXPERTISE_REQUIRED: "Area of expertise is required.",
  FILE_REQUIRED:
    "Please upload the required verification document.",
} as const;

export const isEmailValid = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isOfficialEmail = (email: string): boolean => {
  if (!isEmailValid(email)) return false;
  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  return !/^[a-z0-9]+\.[a-z]{2,}$/.test(domain) || /(edu|ac\.|gov\.)/.test(domain);
};

export function validateBaseFields(
  values: BaseSignupData,
): Partial<Record<keyof BaseSignupData, string>> {
  const errors: Partial<Record<keyof BaseSignupData, string>> = {};

  if (!values.email.trim()) {
    errors.email = VALIDATION_MESSAGES.EMAIL_REQUIRED;
  } else if (!isEmailValid(values.email)) {
    errors.email = VALIDATION_MESSAGES.EMAIL_INVALID;
  } else if (!isOfficialEmail(values.email)) {
    errors.email = VALIDATION_MESSAGES.EMAIL_INSTITUTIONAL;
  }

  if (!values.password) {
    errors.password = VALIDATION_MESSAGES.PASSWORD_REQUIRED;
  } else if (values.password.length < 8) {
    errors.password = VALIDATION_MESSAGES.PASSWORD_MIN;
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = VALIDATION_MESSAGES.PASSWORD_REQUIRED;
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = VALIDATION_MESSAGES.PASSWORD_MATCH;
  }

  return errors;
}