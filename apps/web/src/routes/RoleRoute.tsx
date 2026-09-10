import { Outlet } from "react-router-dom";
import type { UserRole } from "@/types";

interface RoleRouteProps {
  allowedRoles: UserRole[];
}

export function RoleRoute({ allowedRoles: _allowedRoles }: RoleRouteProps) {
  // TODO: Implement role-based access check using auth context
  // For now, render child routes without enforcement
  return <Outlet />;
}
