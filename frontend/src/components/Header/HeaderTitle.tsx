import { Link } from "react-router-dom";
import LogoIcon from "../../assets/LogoIcon";

const HeaderTitle = () => {
  return (
    <Link to={"/"} className="flex items-center gap-1">
      <LogoIcon />
      <span className="font-bold text-xl">Trash My House</span>
    </Link>
  );
};

export default HeaderTitle;
