import { useState } from "react";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { SignupRoleSelector } from "@/features/auth/components/SignupRoleSelector";
import { SignupForm } from "@/features/auth/components/SignupForm";
import type { PublicSignupRole } from "@/features/auth/types/auth.types";

export default function SignupPage() {
  const [selectedRole, setSelectedRole] = useState<PublicSignupRole | null>(null);

  return (
    <AuthLayout
      pageTitle={selectedRole ? undefined : "Join the ecosystem"}
      subtitle={selectedRole ? undefined : "Choose the account type that fits how you participate."}
    >
      <div className="bg-brand-canvas border border-brand-hairline rounded-lg p-6 md:p-8">
        {selectedRole ? (
          <SignupForm role={selectedRole} onBack={() => setSelectedRole(null)} />
        ) : (
          <SignupRoleSelector selected={selectedRole} onSelect={setSelectedRole} />
        )}
      </div>
    </AuthLayout>
  );
}