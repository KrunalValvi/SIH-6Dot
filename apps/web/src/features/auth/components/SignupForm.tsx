import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ValidationMessage } from "@/components/forms/ValidationMessage";
import { ROLE_META } from "@/config/roles";
import { authService } from "@/services/auth.service";
import { validateBaseFields } from "../validators/auth.validators";
import { StudentForm, useStudentValidation } from "./StudentForm";
import { IndustryForm, useIndustryValidation } from "./IndustryForm";
import { AcademicianForm, useAcademicianValidation } from "./AcademicianForm";
import { InstitutionForm, useInstitutionValidation } from "./InstitutionForm";
import type {
  PublicSignupRole,
  SignupData,
  StudentSignupData,
  IndustrySignupData,
  AcademicianSignupData,
  InstitutionSignupData,
} from "../types/auth.types";

interface SignupFormProps {
  role: PublicSignupRole;
  onBack: () => void;
}

const initialStudent: StudentSignupData = {
  role: "student",
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  institution: "",
  program: "",
  branch: "",
  graduationYear: "",
};

const initialIndustry: IndustrySignupData = {
  role: "industry",
  companyName: "",
  email: "",
  password: "",
  confirmPassword: "",
  industrySector: "",
  website: "",
  contactPerson: "",
  contactInformation: "",
  authorizationDocument: null,
};

const initialAcademician: AcademicianSignupData = {
  role: "academician",
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  institution: "",
  department: "",
  designation: "",
  expertise: "",
};

const initialInstitution: InstitutionSignupData = {
  role: "institution",
  institutionName: "",
  email: "",
  password: "",
  confirmPassword: "",
  institutionType: "",
  website: "",
  contactPerson: "",
  contactInformation: "",
  verificationDocument: null,
};

type RoleErrors = Partial<Record<string, string>> & Partial<Record<keyof SignupData, string>>;

export function SignupForm({ role, onBack }: SignupFormProps) {
  const [values, setValues] = useState<SignupData>(() =>
    role === "student"
      ? initialStudent
      : role === "industry"
        ? initialIndustry
        : role === "academician"
          ? initialAcademician
          : initialInstitution,
  );
  const [errors, setErrors] = useState<RoleErrors>({});
  const [serverMessage, setServerMessage] = useState<{
    tone: "error" | "success" | "info";
    text: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const updateValue = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const updateFile = (field: "authorizationDocument" | "verificationDocument") => (file: File | null) => {
    setValues((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerMessage(null);

    const baseErrors = validateBaseFields(values);
    const roleErrors =
      role === "student"
        ? useStudentValidation(values as StudentSignupData)
        : role === "industry"
          ? useIndustryValidation(values as IndustrySignupData)
          : role === "academician"
            ? useAcademicianValidation(values as AcademicianSignupData)
            : useInstitutionValidation(values as InstitutionSignupData);

    const allErrors = { ...roleErrors, ...baseErrors };
    setErrors(allErrors);

    if (Object.keys(allErrors).length > 0) return;

    setLoading(true);
    try {
      const result = await authService.register(values);
      setServerMessage({ tone: result.success ? "success" : "error", text: result.message });
    } catch {
      setServerMessage({
        tone: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-title-md font-medium text-brand-ink">
          {ROLE_META[role].label} Registration
        </h3>
        <Button type="button" variant="text-link" size="sm" onClick={onBack}>
          ← Change role
        </Button>
      </div>

      <div className="space-y-4">
        {role === "student" && (
          <StudentForm
            values={values as StudentSignupData}
            errors={errors}
            onChange={updateValue}
          />
        )}
        {role === "industry" && (
          <IndustryForm
            values={values as IndustrySignupData}
            errors={errors}
            onChange={updateValue}
            onFileChange={updateFile("authorizationDocument")}
          />
        )}
        {role === "academician" && (
          <AcademicianForm
            values={values as AcademicianSignupData}
            errors={errors}
            onChange={updateValue}
          />
        )}
        {role === "institution" && (
          <InstitutionForm
            values={values as InstitutionSignupData}
            errors={errors}
            onChange={updateValue}
            onFileChange={updateFile("verificationDocument")}
          />
        )}
      </div>

      {serverMessage && (
        <div className="mt-6">
          <ValidationMessage tone={serverMessage.tone}>
            {serverMessage.text}
          </ValidationMessage>
        </div>
      )}

      <div className="mt-8">
        <Button type="submit" loading={loading} className="w-full">
          {loading ? "Creating account..." : "Create Account"}
        </Button>
      </div>

      <p className="mt-6 text-center text-body-sm text-brand-muted">
        Already have an account?{" "}
        <Link to="/login" className="text-link text-body-sm">
          Sign in
        </Link>
      </p>
    </form>
  );
}