import HeaderTitle from "./HeaderTitle";
import SearchWidget from "./SearchWidget";
import UserWidget from "./UserWidget";

const PageHeader = () => {
  return (
    <header className="flex justify-between">
      <HeaderTitle />

      <SearchWidget />

      <UserWidget />
    </header>
  );
};

export default PageHeader;
