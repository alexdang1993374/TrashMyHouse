import MenuIcon from "../../assets/MenuIcon";
import UserIcon from "../../assets/UserIcon";
import { Link } from "react-router-dom";
import { useUserContext } from "../../userContext";

const UserWidget = () => {
  const { user } = useUserContext();

  return (
    <Link
      to={"/login"}
      className="flex gap-2 border border-gray-300 rounded-full py-2 px-4  items-center"
    >
      <MenuIcon />
      <div className="bg-gray-500 text-white rounded-full border border-gray-500">
        <UserIcon />
      </div>
      {user?._id !== "" && <div>{user?.name}</div>}
    </Link>
  );
};

export default UserWidget;
