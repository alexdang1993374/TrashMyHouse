import { Outlet } from "react-router-dom";
import PageHeader from "./components/Header/PageHeader";

const Layout = () => {
  return (
    <div>
      <PageHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
