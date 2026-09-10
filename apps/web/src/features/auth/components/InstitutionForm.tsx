import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { PasswordField } from "@/components/ui/PasswordField";
import { FileUpload } from "@/components/ui/FileUpload";
import { FormField } from "@/components/forms/FormField";
import { ValidationMessage } from "@/components/forms/ValidationMessage";
import { VALIDATION_MESSAGES } from "../validators/auth.validators";
import type { InstitutionSignupData } from "../types/auth.types";

interface InstitutionFormProps {
  values: InstitutionSignupData;
  errors: Partial<Record<string, string>>;
  onChange: (field: string, value: string) => void;
  onFileChange?: (file: File | null) => void;
}

const INSTITUTION_TYPES = [
  "University / Central / State",
  "Autonomous College",
  "Engineering College",
  "Polytechnic",
  "Medical College",
  "Management Institute",
  "Vocational Training Institute",
  "Other",
];

export function useInstitutionValidation(values: InstitutionSignupData) {
  const errors: Partial<Record<string, string>> = {};

  if (!values.institutionName.trim()) errors.institutionName = VALIDATION_MESSAGES.INSTITUTION_REQUIRED;
  if (!values.institutionType) errors.institutionType = VALIDATION_MESSAGES.INSTITUTION_TYPE_REQUIRED;
  if (!values.contactPerson.trim()) errors.contactPerson = VALIDATION_MESSAGES.CONTACT_PERSON_REQUIRED;
  if (!values.contactInformation.trim()) errors.contactInformation = VALIDATION_MESSAGES.CONTACT_INFORMATION_REQUIRED;
  if (!values.verificationDocument) errors.verificationDocument = VALIDATION_MESSAGES.FILE_REQUIRED;

  return errors;
}

export function InstitutionForm({ values, errors, onChange, onFileChange }: InstitutionFormProps) {
  return (
    <>
      <FormField label="Institution Name" htmlFor="institutionName" error={errors.institutionName} required>
        <Input
          id="institutionName"
          autoComplete="organization"
          placeholder="Institution name"
          value={values.institutionName}
          onChange={(e) => onChange("institutionName", e.target.value)}
          error={errors.institutionName}
          required
        />
      </FormField>

      <FormField label="Official Email" htmlFor="email" error={errors.email} required>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="admin@university.edu"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
          error={errors.email}
          hint="Use your institutional domain email."
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

      <FormField label="Institution Type" htmlFor="institutionType" error={errors.institutionType} required>
        <Select
          id="institutionType"
          placeholder="Select institution type"
          value={values.institutionType}
          onChange={(e) => onChange("institutionType", e.target.value)}
          error={errors.institutionType}
          options={INSTITUTION_TYPES.map((type) => ({ value: type.toLowerCase(), label: type }))}
          required
        />
      </FormField>

      <FormField label="Website" htmlFor="website">
        <Input
          id="website"
          type="url"
          placeholder="https://university.edu"
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
          placeholder="Phone number / official contact"
          value={values.contactInformation}
          onChange={(e) => onChange("contactInformation", e.target.value)}
          error={errors.contactInformation}
          required
        />
      </FormField>

      <FormField label="Official Verification Document" error={errors.verificationDocument} hint="Upload an official document (e.g. letterhead, affiliation certificate) for verification.">
        <FileUpload
          onFileSelect={onFileChange}
          accept=".pdf,.jpg,.jpeg,.png"
          error={errors.verificationDocument}
        />
      </FormField>

      <ValidationMessage tone="info">
        Your institution account will remain pending until verification by the platform administrator.
      </ValidationMessage>
    </>
  );
}