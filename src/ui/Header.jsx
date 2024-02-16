import { NavLink } from "react-router-dom";

import SearchMovie from "./SearchMovie";
import Footer from "./Footer";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <NavLink></NavLink>
      <SearchMovie />
      <Footer />
    </header>
  );
}

export default Header;
