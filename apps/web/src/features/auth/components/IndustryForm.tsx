import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { PasswordField } from "@/components/ui/PasswordField";
import { FileUpload } from "@/components/ui/FileUpload";
import { FormField } from "@/components/forms/FormField";
import { ValidationMessage } from "@/components/forms/ValidationMessage";
import { VALIDATION_MESSAGES } from "../validators/auth.validators";
import type { IndustrySignupData } from "../types/auth.types";

interface IndustryFormProps {
  values: IndustrySignupData;
  errors: Partial<Record<string, string>>;
  onChange: (field: string, value: string) => void;
  onFileChange?: (file: File | null) => void;
}

const INDUSTRY_SECTORS = [
  "Information Technology",
  "Manufacturing",
  "Healthcare & Pharma",
  "Financial Services",
  "Education & Training",
  "Automotive",
  "Energy & Utilities",
  "Telecommunications",
  "Consumer Goods",
  "Professional Services",
  "Construction & Infrastructure",
  "Other",
];

export function useIndustryValidation(values: IndustrySignupData) {
  const errors: Partial<Record<string, string>> = {};

  if (!values.companyName.trim()) errors.companyName = VALIDATION_MESSAGES.COMPANY_NAME_REQUIRED;
  if (!values.industrySector) errors.industrySector = VALIDATION_MESSAGES.INDUSTRY_SECTOR_REQUIRED;
  if (!values.contactPerson.trim()) errors.contactPerson = VALIDATION_MESSAGES.CONTACT_PERSON_REQUIRED;
  if (!values.contactInformation.trim()) errors.contactInformation = VALIDATION_MESSAGES.CONTACT_INFORMATION_REQUIRED;
  if (!values.authorizationDocument) errors.authorizationDocument = VALIDATION_MESSAGES.FILE_REQUIRED;

  return errors;
}

export function IndustryForm({ values, errors, onChange, onFileChange }: IndustryFormProps) {
  return (
    <>
      <FormField label="Company Name" htmlFor="companyName" error={errors.companyName} required>
        <Input
          id="companyName"
          autoComplete="organization"
          placeholder="Company name"
          value={values.companyName}
          onChange={(e) => onChange("companyName", e.target.value)}
          error={errors.companyName}
          required
        />
      </FormField>

      <FormField label="Official Email" htmlFor="email" error={errors.email} required>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="hr@company.com"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
          error={errors.email}
          hint="Use your company domain email for verification."
          required
        />
      </FormField>

      <FormField label="Password" htmlFor="password" error={errors.password} required>
        <PasswordField
          id="password"
          autoComplete="new-password"
          value={values.password}
          onChange={(e) => onChange("password", e.target.value)}
          error={errors.password}
          hint="Minimum 8 characters."
          required
        />
      </FormField>

      <FormField label="Confirm Password" htmlFor="confirmPassword" error={errors.confirmPassword} required>
        <PasswordField
          id="confirmPassword"
          autoComplete="new-password"
          value={values.confirmPassword}
          onChange={(e) => onChange("confirmPassword", e.target.value)}
          error={errors.confirmPassword}
          required
        />
      </FormField>

      <FormField label="Industry / Sector" htmlFor="industrySector" error={errors.industrySector} required>
        <Select
          id="industrySector"
          placeholder="Select sector"
          value={values.industrySector}
          onChange={(e) => onChange("industrySector", e.target.value)}
          error={errors.industrySector}
          options={INDUSTRY_SECTORS.map((s) => ({ value: s.toLowerCase(), label: s }))}
          required
        />
      </FormField>

      <FormField label="Company Website" htmlFor="website">
        <Input
          id="website"
          type="url"
          placeholder="https://company.com"
          value={values.website || ""}
          onChange={(e) => onChange("website", e.target.value)}
          required={false}
        />
      </FormField>

      <FormField label="Contact Person" htmlFor="contactPerson" error={errors.contactPerson} required>
        <Input
          id="contactPerson"
          autoComplete="name"
          placeholder="Full name"
          value={values.contactPerson}
          onChange={(e) => onChange("contactPerson", e.target.value)}
          error={errors.contactPerson}
          required
        />
      </FormField>

      <FormField label="Contact Information" htmlFor="contactInformation" error={errors.contactInformation} required>
        <Input
          id="contactInformation"
          placeholder="Phone number / HR contact"
          value={values.contactInformation}
          onChange={(e) => onChange("contactInformation", e.target.value)}
          error={errors.contactInformation}
          required
        />
      </FormField>

      <FormField label="Authorization Letter" error={errors.authorizationDocument} hint="Official document authorizing your company account.">
        <FileUpload
          onFileSelect={onFileChange}
          accept=".pdf,.jpg,.jpeg,.png"
          error={errors.authorizationDocument}
        />
      </FormField>

      <ValidationMessage tone="info">
        Your company account will remain pending until verification by the platform administrator.
      </ValidationMessage>
    </>
  );
}