import AgentOverview from "@/pages/Agent/AgentOverview";
import AgentCashIn from "@/pages/Transactions/AgentCashIn";
import AgentCashOut from "@/pages/Transactions/AgentCashOut";
import AgentCommissionHistory from "@/pages/Transactions/AgentCommissionHistory";
import TransactionHistory from "@/pages/Transactions/TransactionHistory";
import ChangePasswordPage from "@/pages/User/ChangePassword";
import Profile from "@/pages/User/Profile";
import ChangePin from "@/pages/Wallet/ChangePin";
import MyWallet from "@/pages/Wallet/MyWallet";
import type { ISidebarItem } from "@/types";

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Agent Dashboard",
    items: [
      {
        title: "Overview",
        url: "/agent/overview",
        component: AgentOverview,
      },
    ],
  },
  {
    title: "Wallet",
    items: [
      {
        title: "My Wallet",
        url: "/agent/my-wallet",
        component: MyWallet,
      },
      {
        title: "Change Pin",
        url: "/agent/change-pin,",
        component: ChangePin,
      },
    ],
  },
  {
    title: "Transactions",
    items: [
      {
        title: "Add money",
        url: "/agent/cash-in",
        component: AgentCashIn,
      },
      {
        title: "Withdraw Money",
        url: "/agent/cash-out",
        component: AgentCashOut,
      },
      {
        title: "Transactions History",
        url: "/agent/transaction-history",
        component: TransactionHistory,
      },
      {
        title: "Commission History",
        url: "/agent/commission-history",
        component: AgentCommissionHistory,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Profile",
        url: "/agent/profile",
        component: Profile,
      },
      {
        title: "Change Password",
        url: "/agent/change-password",
        component: ChangePasswordPage,
      },
    ],
  },
];
