import LogoIcon from "../../assets/LogoIcon";

const HeaderTitle = () => {
  return (
    <a href="/" className="flex items-center gap-1">
      <LogoIcon />
      <span className="font-bold text-xl">Trash My House</span>
    </a>
  );
};

export default HeaderTitle;
