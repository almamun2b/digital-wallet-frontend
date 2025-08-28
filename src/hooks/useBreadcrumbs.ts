import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { useMemo } from "react";
import { useLocation } from "react-router";

export interface BreadcrumbItem {
  title: string;
  href?: string;
}

export const useBreadcrumbs = () => {
  const location = useLocation();
  const { data: user } = useUserInfoQuery();

  const breadcrumbs = useMemo(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const items: BreadcrumbItem[] = [];

    if (pathSegments.length === 0) return items;

    // Get the role from the first segment (user, agent, admin)
    const role = pathSegments[0];
    const userRole = user?.data?.role;

    if (!userRole) return items;

    // Get sidebar items for the current user role
    const sidebarItems = getSidebarItems(userRole);

    // Add Dashboard as the first item (only if we're in a dashboard route)
    if (["user", "agent", "admin"].includes(role)) {
      items.push({
        title: "Dashboard",
        href: `/${role}`,
      });
    }

    // Find the current page in sidebar items
    if (pathSegments.length > 1) {
      const currentPath = location.pathname;

      // Search through all sidebar items to find the matching route
      let found = false;
      for (const section of sidebarItems) {
        for (const item of section.items) {
          if (item.url === currentPath) {
            items.push({
              title: item.title,
            });
            found = true;
            break;
          }
        }
        if (found) break;
      }

      // If not found in sidebar items, create a fallback breadcrumb
      if (!found && pathSegments.length > 1) {
        const lastSegment = pathSegments[pathSegments.length - 1];
        const title = formatSegmentTitle(lastSegment);

        items.push({
          title,
        });
      }
    }

    return items;
  }, [location.pathname, user?.data?.role]);

  return breadcrumbs;
};

// Helper function to format URL segments into readable titles
const formatSegmentTitle = (segment: string): string => {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
