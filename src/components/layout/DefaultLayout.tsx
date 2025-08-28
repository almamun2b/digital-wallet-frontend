import type { ReactNode } from "react";
import Footer from "../modules/footer/Footer";
import Navbar from "../modules/navbar/Navbar";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
