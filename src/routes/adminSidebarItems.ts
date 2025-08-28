import Overview from "@/pages/Admin/Overview";
import ChangePasswordPage from "@/pages/User/ChangePassword";
import Profile from "@/pages/User/Profile";
import ChangePin from "@/pages/Wallet/ChangePin";
import MyWallet from "@/pages/Wallet/MyWallet";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Overview",
        url: "/admin/overview",
        component: Overview,
      },
    ],
  },
  {
    title: "Wallet",
    items: [
      {
        title: "My Wallet",
        url: "/admin/my-wallet",
        component: MyWallet,
      },
      {
        title: "Change Pin",
        url: "/admin/change-pin,",
        component: ChangePin,
      },
    ],
  },
  {
    title: "All Users",
    items: [
      {
        title: "Users",
        url: "/admin/users",
        component: Overview,
      },
      {
        title: "Agents",
        url: "/admin/agents",
        component: Overview,
      },
    ],
  },
  {
    title: "Transactions",
    items: [
      {
        title: "Send Money to Agent",
        url: "/admin/send-money",
        component: Overview,
      },
      {
        title: "Transactions history",
        url: "/admin/transaction-history",
        component: Overview,
      },
      {
        title: "Adjust system fees/limits",
        url: "/admin/fees-limits",
        component: Overview,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Profile",
        url: "/admin/profile",
        component: Profile,
      },
      {
        title: "Change Password",
        url: "/admin/change-password",
        component: ChangePasswordPage,
      },
    ],
  },
];
