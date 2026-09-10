import { AuthLayout } from "@/components/layout/AuthLayout";
import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      pageTitle="Welcome back"
      subtitle="Sign in to continue to your workspace."
    >
      <div className="bg-brand-canvas border border-brand-hairline rounded-lg p-8">
        <LoginForm />
      </div>
    </AuthLayout>
  );
}