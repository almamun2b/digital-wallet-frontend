import { ProfileSkeleton } from "@/components/modules/dashboard/ProfileSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { AuthProviderName, IAgent, IUser } from "@/types";
import {
  CheckCircle,
  Chrome,
  Clock,
  Edit,
  Facebook,
  Github,
  Key,
  Mail,
  MapPin,
  Phone,
  Settings,
  Shield,
  User,
  Wallet,
  XCircle,
} from "lucide-react";
import { Link } from "react-router";

/* ---------- Helpers ---------- */
const getRoleBadgeVariant = (
  role: IUser["role"]
): "default" | "secondary" | "outline" | "destructive" => {
  switch (role) {
    case "SUPER_ADMIN":
      return "destructive";
    case "ADMIN":
      return "default";
    case "AGENT":
      return "secondary";
    default:
      return "outline";
  }
};

const getStatusColor = (status: IUser["isActive"]): string => {
  switch (status) {
    case "ACTIVE":
      return "text-green-600 dark:text-green-400";
    case "INACTIVE":
      return "text-yellow-600 dark:text-yellow-400";
    case "BLOCKED":
      return "text-red-600 dark:text-red-400";
    default:
      return "text-muted-foreground";
  }
};

const getAgentStatusColor = (status: IAgent["status"]): string => {
  switch (status) {
    case "APPROVED":
      return "text-green-600 dark:text-green-400";
    case "PENDING":
      return "text-yellow-600 dark:text-yellow-400";
    case "SUSPENDED":
      return "text-red-600 dark:text-red-400";
    default:
      return "text-muted-foreground";
  }
};

const getProviderIcon = (provider: AuthProviderName) => {
  switch (provider) {
    case "google":
      return <Chrome className="h-4 w-4" />;
    case "facebook":
      return <Facebook className="h-4 w-4" />;
    case "github":
      return <Github className="h-4 w-4" />;
    case "credential":
      return <Key className="h-4 w-4" />;
    default:
      return <User className="h-4 w-4" />;
  }
};

const getProviderName = (provider: AuthProviderName): string => {
  return provider.charAt(0).toUpperCase() + provider.slice(1);
};

const getInitials = (name: string): string =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export default function ProfilePage() {
  const { data, isLoading, refetch, isFetching } = useUserInfoQuery();
  const user = data?.data;

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <XCircle className="h-12 w-12 mx-auto text-destructive" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">User Not Found</h3>
                <p className="text-sm text-muted-foreground">
                  Unable to load user profile information.
                </p>
              </div>
              <Button variant="outline" onClick={() => refetch()}>
                {isFetching ? "Refreshing..." : "Retry"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-full bg-background p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        {/*  Banner Section */}
        <div className="relative">
          <div className="h-28 rounded-t-lg bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
          <div className="absolute top-[60px] left-8">
            <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
              <AvatarImage src={user.picture} alt={user.name} />
              <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>
          </div>
          <Card className="rounded-t-none pt-16 pb-6 px-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                  {user.name}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant={getRoleBadgeVariant(user.role)}>
                    <Shield className="h-3 w-3 mr-1" />
                    {user.role.replace("_", " ")}
                  </Badge>
                  <Badge
                    variant={
                      user.isActive === "ACTIVE"
                        ? "default"
                        : user.isActive === "INACTIVE"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {user.isActive === "ACTIVE" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <XCircle className="h-3 w-3 mr-1" />
                    )}
                    {user.isActive}
                  </Badge>
                  {user.isVerified && (
                    <Badge
                      variant="outline"
                      className="border-green-200 text-green-700 dark:border-green-800 dark:text-green-400"
                    >
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      to={
                        user?.role === "ADMIN" || user?.role === "SUPER_ADMIN"
                          ? "/admin/profile/edit"
                          : user?.role === "AGENT"
                          ? "/agent/profile/edit"
                          : "/user/profile/edit"
                      }
                      className="flex items-center"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="hidden">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground">
                    User ID
                  </label>
                  <code className="block text-sm bg-muted p-2 rounded-md font-mono">
                    {user._id}
                  </code>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground">
                    Full Name
                  </label>
                  <p className="text-sm font-medium">{user.name}</p>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground">
                    Email Address
                  </label>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                </div>

                {user.phone && (
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground">
                      Phone Number
                    </label>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{user.phone}</span>
                    </div>
                  </div>
                )}

                {user.address && (
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground">
                      Address
                    </label>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{user.address}</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Account Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                Account Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">
                  Wallet Address
                </label>
                <code className="block text-sm bg-muted p-2 rounded-md font-mono">
                  {user.wallet}
                </code>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Status
                  </label>
                  <div
                    className={`flex items-center gap-2 text-sm font-medium ${getStatusColor(
                      user.isActive
                    )}`}
                  >
                    {user.isActive === "ACTIVE" ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <XCircle className="h-4 w-4" />
                    )}
                    {user.isActive}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Role
                  </label>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      {user.role.replace("_", " ")}
                    </span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      user.isVerified ? "bg-green-500" : "bg-muted"
                    }`}
                  ></div>
                  <div>
                    <p className="text-sm font-medium">Email Verified</p>
                    <p className="text-xs text-muted-foreground">
                      {user.isVerified ? "Verified" : "Not verified"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      !user.isDeleted ? "bg-green-500" : "bg-destructive"
                    }`}
                  ></div>
                  <div>
                    <p className="text-sm font-medium">Account Status</p>
                    <p className="text-xs text-muted-foreground">
                      {!user.isDeleted ? "Active" : "Deleted"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Authentication & Agent Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Authentication Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {user.auths.map((auth, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border bg-card"
                  >
                    <div className="flex items-center gap-3">
                      {getProviderIcon(auth.provider)}
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          {getProviderName(auth.provider)}
                        </p>
                        <p className="text-xs text-muted-foreground font-mono">
                          {auth.providerId}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-green-200 text-green-700 dark:border-green-800 dark:text-green-400"
                    >
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Connected
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Agent Information */}
          {user.agent && user.agent.status !== "NONE" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Agent Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Agent Status
                  </label>
                  <div
                    className={`flex items-center gap-2 text-sm font-medium ${getAgentStatusColor(
                      user.agent.status
                    )}`}
                  >
                    <Clock className="h-4 w-4" />
                    {user.agent.status}
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Agent Privileges</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Access to agent dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Customer support tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>Commission tracking</span>
                    </div>
                    {user.agent.status === "APPROVED" && (
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                        <CheckCircle className="h-3 w-3" />
                        <span>Full agent functionality enabled</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
