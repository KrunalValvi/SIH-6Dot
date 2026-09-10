import { Outlet } from "react-router-dom";
import LandingPage from "@/pages/landing/LandingPage";

export function PublicRoutes() {
  return (
    <>
      <LandingPage />
      <Outlet />
    </>
  );
}