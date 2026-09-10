import { Outlet } from "react-router-dom";

export function ProtectedRoutes() {
  // TODO: Add auth check and redirect to /login if unauthenticated
  return <Outlet />;
}
