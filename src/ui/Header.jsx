import { NavLink } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="flex items-center justify-around py-2 uppercase border-b-4 border-amber-300">
      <NavLink to="home" className="font-semibold flex items-center">
        <img src="../public/images/pizza.png" alt="logo" className="w-8" />
        <span>Pizza Mania</span>
      </NavLink>
      <div id="header-services" className="space-x-8 hidden sm:block">
        <Button to="/menu" className="header">
          Menu
        </Button>
        <Button to="/services" className="header">
          Services
        </Button>
        <Button to="about" className="header">
          About
        </Button>
      </div>
      <Button to="login" className="secondary">
        Login
      </Button>
    </header>
  );
}

export default Header;
