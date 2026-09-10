import { Routes, Route, Navigate } from "react-router-dom";
import { RoleRoute } from "./RoleRoute";

import StudentDashboardPage from "@/pages/student/StudentDashboardPage";
import IndustryDashboardPage from "@/pages/industry/IndustryDashboardPage";
import AcademicianDashboardPage from "@/pages/academician/AcademicianDashboardPage";
import InstitutionDashboardPage from "@/pages/institution/InstitutionDashboardPage";
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/student" element={<RoleRoute allowedRoles={["student"]} />}>
        <Route index element={<StudentDashboardPage />} />
      </Route>
      <Route path="/industry" element={<RoleRoute allowedRoles={["industry"]} />}>
        <Route index element={<IndustryDashboardPage />} />
      </Route>
      <Route path="/academician" element={<RoleRoute allowedRoles={["academician"]} />}>
        <Route index element={<AcademicianDashboardPage />} />
      </Route>
      <Route path="/institution" element={<RoleRoute allowedRoles={["institution"]} />}>
        <Route index element={<InstitutionDashboardPage />} />
      </Route>
      <Route path="/admin" element={<RoleRoute allowedRoles={["admin"]} />}>
        <Route index element={<AdminDashboardPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/app/student" replace />} />
    </Routes>
  );
}
