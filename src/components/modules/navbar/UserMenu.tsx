import { LayoutDashboard, LogOutIcon, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook.redux";
import { Link } from "react-router";

export default function UserMenu() {
  const { data: user, isLoading } = useUserInfoQuery();
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

  return (
    <>
      {!isLoading && user?.data?.email ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-12 p-0 hover:bg-transparent rounded-full"
            >
              <Avatar className="size-10 rounded-full">
                <AvatarImage src="./avatar.jpg" alt="Profile image" />
                <AvatarFallback>
                  {user?.data?.name?.split(" ")[0][0]?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-48 max-w-64" align="end">
            <DropdownMenuLabel className="flex min-w-0 flex-col">
              <span className="text-foreground truncate text-sm font-medium">
                {user?.data?.name || "Unnamed User"}
              </span>
              <span className="text-muted-foreground truncate text-xs font-normal">
                {user?.data?.email || "No email provided"}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link
                  to={
                    user?.data?.role === "ADMIN" ||
                    user?.data?.role === "SUPER_ADMIN"
                      ? "/admin"
                      : user?.data?.role === "AGENT"
                      ? "/agent"
                      : "/user"
                  }
                  className="flex items-center"
                >
                  <LayoutDashboard
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link
                  to={
                    user?.data?.role === "ADMIN" ||
                    user?.data?.role === "SUPER_ADMIN"
                      ? "/admin/profile"
                      : user?.data?.role === "AGENT"
                      ? "/agent/profile"
                      : "/user/profile"
                  }
                  className="flex items-center"
                >
                  <User size={16} className="opacity-60" aria-hidden="true" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : isLoading ? (
        <Skeleton className="h-10 w-10 rounded-full" />
      ) : (
        <Button asChild className="text-sm">
          <Link to="/login">Login</Link>
        </Button>
      )}
    </>
  );
}
