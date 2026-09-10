import { Input } from "@/components/ui/Input";
import { PasswordField } from "@/components/ui/PasswordField";
import { FormField } from "@/components/forms/FormField";
import { ValidationMessage } from "@/components/forms/ValidationMessage";
import { VALIDATION_MESSAGES } from "../validators/auth.validators";
import type { AcademicianSignupData } from "../types/auth.types";

interface AcademicianFormProps {
  values: AcademicianSignupData;
  errors: Partial<Record<string, string>>;
  onChange: (field: string, value: string) => void;
}

export function useAcademicianValidation(values: AcademicianSignupData) {
  const errors: Partial<Record<string, string>> = {};

  if (!values.fullName.trim()) errors.fullName = VALIDATION_MESSAGES.NAME_REQUIRED;
  if (!values.institution.trim()) errors.institution = VALIDATION_MESSAGES.INSTITUTION_REQUIRED;
  if (!values.department.trim()) errors.department = VALIDATION_MESSAGES.DEPARTMENT_REQUIRED;
  if (!values.designation.trim()) errors.designation = VALIDATION_MESSAGES.DESIGNATION_REQUIRED;
  if (!values.expertise.trim()) errors.expertise = VALIDATION_MESSAGES.EXPERTISE_REQUIRED;

  return errors;
}

export function AcademicianForm({ values, errors, onChange }: AcademicianFormProps) {
  return (
    <>
      <FormField label="Full Name" htmlFor="fullName" error={errors.fullName} required>
        <Input
          id="fullName"
          autoComplete="name"
          placeholder="Full name"
          value={values.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          error={errors.fullName}
          required
        />
      </FormField>

      <FormField label="Official Email" htmlFor="email" error={errors.email} required>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="name@university.edu"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
          error={errors.email}
          hint="Use your institutional email address."
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

      <FormField label="Institution" htmlFor="institution" error={errors.institution} required>
        <Input
          id="institution"
          autoComplete="organization"
          placeholder="University name"
          value={values.institution}
          onChange={(e) => onChange("institution", e.target.value)}
          error={errors.institution}
          required
        />
      </FormField>

      <FormField label="Department" htmlFor="department" error={errors.department} required>
        <Input
          id="department"
          placeholder="e.g. Computer Science"
          value={values.department}
          onChange={(e) => onChange("department", e.target.value)}
          error={errors.department}
          required
        />
      </FormField>

      <FormField label="Designation" htmlFor="designation" error={errors.designation} required>
        <Input
          id="designation"
          placeholder="e.g. Assistant Professor"
          value={values.designation}
          onChange={(e) => onChange("designation", e.target.value)}
          error={errors.designation}
          required
        />
      </FormField>

      <FormField label="Area of Expertise" htmlFor="expertise" error={errors.expertise} required>
        <Input
          id="expertise"
          placeholder="e.g. Machine Learning, Web Systems"
          value={values.expertise}
          onChange={(e) => onChange("expertise", e.target.value)}
          error={errors.expertise}
          required
        />
      </FormField>

      <ValidationMessage tone="info">
        Your account will be listed as pending university approval until confirmed by your institution.
      </ValidationMessage>
    </>
  );
}