import { Outlet } from "react-router";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}

export default App;
