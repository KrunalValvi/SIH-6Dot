import { AuthLayout } from "@/components/layout/AuthLayout";
import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      pageTitle="Reset your password"
      subtitle="Enter your email and we'll help you get back in."
    >
      <div className="bg-brand-canvas border border-brand-hairline rounded-lg p-8">
        <ForgotPasswordForm />
      </div>
    </AuthLayout>
  );
}