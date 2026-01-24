import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constants/role";
import About from "@/pages/About";
import Accessibility from "@/pages/Accessibility";
import ContactUs from "@/pages/ContactUs";
import Faq from "@/pages/Faq";
import Features from "@/pages/Features";
import Feedback from "@/pages/Feedback";
import HelpCenter from "@/pages/HelpCenter";
import Homepage from "@/pages/Homepage";
import Login from "@/pages/Login";
import Fail from "@/pages/Payment/Fail";
import Success from "@/pages/Payment/Success";
import Pricing from "@/pages/Pricing";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import RefundPolicy from "@/pages/RefundPolicy";
import Register from "@/pages/Register";
import TermsOfService from "@/pages/TermsOfService";
import Unauthorized from "@/pages/Unauthorized";
import EditProfile from "@/pages/User/EditProfile";
import Verify from "@/pages/Verify";
import type { TRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { agentSidebarItems } from "./agentSidebarItems";
import { userSidebarItems } from "./userSidebarItems";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        Component: Homepage,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: Pricing,
        path: "pricing",
      },
      {
        Component: ContactUs,
        path: "contact-us",
      },
      {
        Component: Faq,
        path: "faq",
      },
      {
        Component: HelpCenter,
        path: "help-center",
      },
      {
        Component: Feedback,
        path: "feedback",
      },
      {
        Component: PrivacyPolicy,
        path: "privacy-policy",
      },
      {
        Component: TermsOfService,
        path: "terms-of-service",
      },
      {
        Component: Accessibility,
        path: "accessibility",
      },
      {
        Component: RefundPolicy,
        path: "refund-policy",
      },
    ],
  },
  {
    path: "/user",
    Component: withAuth(DashboardLayout, role.user as TRole),
    children: [
      { index: true, element: <Navigate to="/user/overview" /> },
      ...generateRoutes(userSidebarItems),
      {
        Component: EditProfile,
        path: "profile/edit",
      },
    ],
  },
  {
    path: "/agent",
    Component: withAuth(DashboardLayout, role.agent as TRole),
    children: [
      { index: true, element: <Navigate to="/agent/overview" /> },
      ...generateRoutes(agentSidebarItems),
      {
        Component: EditProfile,
        path: "profile/edit",
      },
    ],
  },
  {
    path: "/admin",
    Component: withAuth(DashboardLayout, [
      role.admin as TRole,
      role.superAdmin as TRole,
    ]),
    children: [
      { index: true, element: <Navigate to="/admin/overview" /> },
      ...generateRoutes(adminSidebarItems),
      {
        Component: EditProfile,
        path: "profile/edit",
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/verify", // need to implement email verification
    Component: Verify,
  },
  {
    path: "/unauthorized",
    Component: Unauthorized,
  },
  {
    Component: Success, // no needed
    path: "/payment/success",
  },
  {
    Component: Fail, //no needed
    path: "/payment/fail",
  },
]);

export { router };
