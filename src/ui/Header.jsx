import { NavLink } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="flex items-center justify-around  py-4 uppercase border-b-4 border-amber-300">
      <NavLink to="home" className="font-semibold flex items-center">
        <img src="../public/images/pizza.png" alt="logo" className="w-8" />
        <span>Feeding Frenzy</span>
      </NavLink>

      <Button to="login" className="secondary">
        Login
      </Button>
    </header>
  );
}

export default Header;
