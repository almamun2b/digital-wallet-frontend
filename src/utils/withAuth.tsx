import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Navigate } from "react-router";
import type { TRole } from "../types";

export const withAuth = (
  Component: React.ComponentType,
  requiredRoles?: TRole | TRole[]
) => {
  return function AuthWrapper() {
    const { data: user, isLoading } = useUserInfoQuery();

    if (!isLoading && !user?.data?.email) {
      return <Navigate to="/login" />;
    }
    const userRole = user?.data?.role;

    if (!isLoading && requiredRoles && userRole) {
      const allowedRoles = Array.isArray(requiredRoles)
        ? requiredRoles
        : [requiredRoles];
      if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/unauthorized" replace />;
      }
    }

    return <Component />;
  };
};
