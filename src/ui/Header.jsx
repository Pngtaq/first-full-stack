import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-around border-b-2 py-3 bg-orange-400 font-semibold uppercase text-md">
      <NavLink to="home">Company name</NavLink>

      <NavLink to="login">Login</NavLink>
    </header>
  );
}

export default Header;
