import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PasswordField } from "@/components/ui/PasswordField";
import { ValidationMessage } from "@/components/forms/ValidationMessage";
import { authService } from "@/services/auth.service";
import {
  VALIDATION_MESSAGES,
  isEmailValid,
} from "../validators/auth.validators";
import type { LoginCredentials } from "../types/auth.types";

interface LoginFormProps {
  onSuccess?: () => void;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverMessage, setServerMessage] = useState<{
    tone: "error" | "success" | "info";
    text: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!email.trim()) {
      nextErrors.email = VALIDATION_MESSAGES.EMAIL_REQUIRED;
    } else if (!isEmailValid(email)) {
      nextErrors.email = VALIDATION_MESSAGES.EMAIL_INVALID;
    }

    if (!password) {
      nextErrors.password = VALIDATION_MESSAGES.PASSWORD_REQUIRED;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerMessage(null);

    if (!validate()) return;

    setLoading(true);
    try {
      const credentials: LoginCredentials = { email, password };
      const result = await authService.login(credentials);

      if (result.success && onSuccess) {
        onSuccess();
      } else {
        setServerMessage({
          tone: "info",
          text: result.message || "Unable to sign in.",
        });
      }
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
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          autoFocus
          error={errors.email}
          required
        />
        <PasswordField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          error={errors.password}
          required
        />

        <div className="flex items-center justify-between">
          <Link to="/forgot-password" className="text-link text-body-sm">
            Forgot password?
          </Link>
        </div>

        {serverMessage && (
          <ValidationMessage tone={serverMessage.tone}>
            {serverMessage.text}
          </ValidationMessage>
        )}

        <Button type="submit" loading={loading} className="w-full">
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <p className="mt-6 text-center text-body-sm text-brand-muted">
        New to the platform?{" "}
        <Link to="/signup" className="text-link text-body-sm">
          Create an account
        </Link>
      </p>
    </>
  );
}