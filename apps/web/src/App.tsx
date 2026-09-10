import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "@/routes/PublicRoutes";
import { AuthRoutes } from "@/routes/AuthRoutes";
import { ProtectedRoutes } from "@/routes/ProtectedRoutes";
import { AppRoutes } from "@/routes/AppRoutes";
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />} />

      <Route element={<AuthRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      <Route path="/app/*" element={<ProtectedRoutes />}>
        <Route path="*" element={<AppRoutes />} />
      </Route>
    </Routes>
  );
}