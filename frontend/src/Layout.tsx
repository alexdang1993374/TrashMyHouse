import { Outlet } from "react-router-dom";
import PageHeader from "./components/Header/PageHeader";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
