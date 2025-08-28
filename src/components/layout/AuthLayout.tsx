import { Outlet } from "react-router";

// interface AuthLayoutProps {
//   children: React.ReactNode;
// }

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
