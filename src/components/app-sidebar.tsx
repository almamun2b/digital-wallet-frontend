import * as React from "react";

import Logo from "@/assets/icons/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook.redux";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { LogOut } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData, isLoading: isUserLoading } = useUserInfoQuery();
  const location = useLocation();
  const sidebarData = {
    navMain: getSidebarItems(userData?.data?.role || "USER"),
  };

  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b h-16">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-xl font-medium text-primary">
            Digital Wallet
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {sidebarData.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-base font-semibold bg-secondary mb-1">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className={
                          location.pathname === item.url ? "text-primary" : ""
                        }
                      >
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      {/* <SidebarRail /> */}
      <SidebarFooter className="border-t p-4 text-center text-sm flex flex-row items-center gap-3">
        {!isUserLoading ? (
          <>
            <Avatar className="size-10 rounded-full">
              <AvatarImage src="./avatar.jpg" alt="Profile image" />
              <AvatarFallback>
                {userData?.data?.name?.split(" ")[0][0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <div className=" text-start flex-1">
              <p className="text-foreground font-medium">
                {userData?.data?.name || "Unnamed User"}
              </p>
              <p className="text-muted-foreground text-xs">
                {userData?.data?.email || "No email provided"}
              </p>
            </div>
            <Button
              disabled={isLoggingOut}
              variant="outline"
              size="icon"
              className="size-8 p-0"
              title="Logout"
              onClick={handleLogout}
            >
              <LogOut />
            </Button>
          </>
        ) : (
          <Skeleton className="h-10 w-full" />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
