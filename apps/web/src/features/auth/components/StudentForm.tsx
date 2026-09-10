import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { PasswordField } from "@/components/ui/PasswordField";
import { FormField } from "@/components/forms/FormField";
import { ValidationMessage } from "@/components/forms/ValidationMessage";
import { VALIDATION_MESSAGES } from "../validators/auth.validators";
import type { StudentSignupData } from "../types/auth.types";

interface StudentFormProps {
  values: StudentSignupData;
  errors: Partial<Record<string, string>>;
  onChange: (field: string, value: string) => void;
}

const GRADUATION_YEARS = Array.from(
  { length: 8 },
  (_, i) => String(new Date().getFullYear() + i),
);

export function useStudentValidation(values: StudentSignupData) {
  const errors: Partial<Record<string, string>> = {};

  if (!values.fullName.trim()) errors.fullName = VALIDATION_MESSAGES.NAME_REQUIRED;
  if (!values.institution.trim()) errors.institution = VALIDATION_MESSAGES.INSTITUTION_REQUIRED;
  if (!values.program.trim()) errors.program = VALIDATION_MESSAGES.PROGRAM_REQUIRED;
  if (!values.branch.trim()) errors.branch = VALIDATION_MESSAGES.BRANCH_REQUIRED;

  if (!values.graduationYear) {
    errors.graduationYear = VALIDATION_MESSAGES.GRADUATION_YEAR_REQUIRED;
  } else {
    const year = parseInt(values.graduationYear, 10);
    if (year < new Date().getFullYear() || year > new Date().getFullYear() + 10) {
      errors.graduationYear = VALIDATION_MESSAGES.GRADUATION_YEAR_INVALID;
    }
  }

  return errors;
}

export function StudentForm({ values, errors, onChange }: StudentFormProps) {
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

      <FormField label="Email" htmlFor="email" error={errors.email} required>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@university.edu"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
          error={errors.email}
          hint="Use your official university email where possible."
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

      <FormField label="University / Institution" htmlFor="institution" error={errors.institution} required>
        <Input
          id="institution"
          placeholder="University name"
          autoComplete="organization"
          value={values.institution}
          onChange={(e) => onChange("institution", e.target.value)}
          error={errors.institution}
          required
        />
      </FormField>

      <FormField label="Program / Degree" htmlFor="program" error={errors.program} required>
        <Select
          id="program"
          placeholder="Select program"
          value={values.program}
          onChange={(e) => onChange("program", e.target.value)}
          error={errors.program}
          options={[
            { value: "btech", label: "B.Tech" },
            { value: "be", label: "B.E." },
            { value: "mtech", label: "M.Tech" },
            { value: "bca", label: "BCA" },
            { value: "mca", label: "MCA" },
            { value: "bsc", label: "B.Sc" },
            { value: "msc", label: "M.Sc" },
            { value: "bba", label: "BBA" },
            { value: "mba", label: "MBA" },
          ]}
          required
        />
      </FormField>

      <FormField label="Branch / Field" htmlFor="branch" error={errors.branch} required>
        <Input
          id="branch"
          placeholder="e.g. Computer Science"
          value={values.branch}
          onChange={(e) => onChange("branch", e.target.value)}
          error={errors.branch}
          required
        />
      </FormField>

      <FormField label="Graduation Year" htmlFor="graduationYear" error={errors.graduationYear} required>
        <Select
          id="graduationYear"
          placeholder="Select year"
          value={values.graduationYear}
          onChange={(e) => onChange("graduationYear", e.target.value)}
          error={errors.graduationYear}
          options={GRADUATION_YEARS.map((y) => ({ value: y, label: y }))}
          required
        />
      </FormField>

      <ValidationMessage tone="info">
        Your account may require university verification depending on your registration method.
      </ValidationMessage>
    </>
  );
}