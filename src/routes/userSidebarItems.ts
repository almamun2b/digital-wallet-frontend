import SendMoney from "@/pages/Transactions/SendMoney";
import TransactionHistory from "@/pages/Transactions/TransactionHistory";
import UserCashIn from "@/pages/Transactions/UserCashIn";
import UserCashOut from "@/pages/Transactions/UserCashOut";
import ChangePasswordPage from "@/pages/User/ChangePassword";
import Overview from "@/pages/User/Overview";
import Profile from "@/pages/User/Profile";
import ChangePin from "@/pages/Wallet/ChangePin";
import MyWallet from "@/pages/Wallet/MyWallet";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "User Dashboard",
    items: [
      {
        title: "Overview",
        url: "/user/overview",
        component: Overview,
      },
    ],
  },
  {
    title: "Wallet",
    items: [
      {
        title: "My Wallet",
        url: "/user/my-wallet",
        component: MyWallet,
      },
      {
        title: "Change Pin",
        url: "/user/change-pin,",
        component: ChangePin,
      },
    ],
  },
  {
    title: "Transactions",
    items: [
      {
        title: "Send Money",
        url: "/user/send-money",
        component: SendMoney,
      },
      {
        title: "Deposit Money",
        url: "/user/cash-in",
        component: UserCashIn,
      },
      {
        title: "Withdraw Money",
        url: "/user/cash-out",
        component: UserCashOut,
      },
      {
        title: "Transaction History",
        url: "/user/transaction-history",
        component: TransactionHistory,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Profile",
        url: "/user/profile",
        component: Profile,
      },
      {
        title: "Change Password",
        url: "/user/change-password",
        component: ChangePasswordPage,
      },
    ],
  },
];
