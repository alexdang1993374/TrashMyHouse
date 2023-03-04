import MenuIcon from "../../assets/MenuIcon";
import UserIcon from "../../assets/UserIcon";
import { ContainerSt } from "../../styles/common";

const UserWidget = () => {
  return (
    <ContainerSt $hideShadow className="items-center">
      <MenuIcon />
      <div className="bg-gray-500 text-white rounded-full border border-gray-500">
        <UserIcon />
      </div>
    </ContainerSt>
  );
};

export default UserWidget;
