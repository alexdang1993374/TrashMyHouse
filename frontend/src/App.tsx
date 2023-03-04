import "./App.css";
import HeaderTitle from "./components/HeaderTitle";
import SearchWidget from "./components/SearchWidget";
import UserWidget from "./components/UserWidget";

function App() {
  return (
    <header className="flex justify-between">
      <HeaderTitle />

      <SearchWidget />

      <UserWidget />
    </header>
  );
}

export default App;
