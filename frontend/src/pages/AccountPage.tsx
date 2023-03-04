import { Navigate } from "react-router-dom";
import { useUserContext } from "../userContext";

const AccountPage = () => {
  const { user } = useUserContext();

  if (user?._id === "") {
    return <Navigate to={"/login"} />;
  }

  return <div>Account page for {user?.name}</div>;
};

export default AccountPage;
