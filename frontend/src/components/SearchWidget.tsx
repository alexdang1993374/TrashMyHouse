import SearchIcon from "../assets/SearchIcon";
import { ContainerSt, DividerSt } from "../styles/common";

const SearchWidget = () => {
  return (
    <ContainerSt>
      <div>Anywhere</div>
      <DividerSt />
      <div>Any week</div>
      <DividerSt />
      <div>Add guests</div>
      <button className="bg-primary text-white p-1 rounded-full">
        <SearchIcon />
      </button>
    </ContainerSt>
  );
};

export default SearchWidget;
