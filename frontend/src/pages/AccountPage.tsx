import { Navigate } from "react-router-dom";
import { useUserContext } from "../userContext";

const AccountPage = () => {
  const { user, ready } = useUserContext();

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  return <div>Account page for {user?.name}</div>;
};

export default AccountPage;
