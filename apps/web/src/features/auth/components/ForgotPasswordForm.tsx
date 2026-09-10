import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ValidationMessage } from "@/components/forms/ValidationMessage";
import { VALIDATION_MESSAGES, isEmailValid } from "../validators/auth.validators";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();
  const [status, setStatus] = useState<{
    tone: "error" | "success" | "info";
    text: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!email.trim()) {
      setError(VALIDATION_MESSAGES.EMAIL_REQUIRED);
      return;
    }
    if (!isEmailValid(email)) {
      setError(VALIDATION_MESSAGES.EMAIL_INVALID);
      return;
    }
    setError(undefined);

    setLoading(true);
    // Mock behavior — password reset is not connected to the backend yet.
    setLoading(false);
    setStatus({
      tone: "info",
      text: "Password reset is not connected yet. This is a mock — reset instructions will be sent once the backend is ready.",
    });
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
          error={error}
          required
        />

        {status && (
          <ValidationMessage tone={status.tone}>
            {status.text}
          </ValidationMessage>
        )}

        <Button type="submit" loading={loading} className="w-full">
          {loading ? "Sending..." : "Send Reset Instructions"}
        </Button>
      </form>

      <p className="mt-6 text-center text-body-sm text-brand-muted">
        Remembered your password?{" "}
        <Link to="/login" className="text-link text-body-sm">
          Sign in
        </Link>
      </p>
    </>
  );
}