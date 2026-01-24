import { Outlet } from "react-router";
import DefaultLayout from "./components/layout/DefaultLayout";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </>
  );
}

export default App;
