import { NavLink } from "react-router-dom";

function Button({ children, onClick, to, className }) {
  const base =
    "border-2 border-amber-400 px-6 py-4 rounded-lg font-bold text-sm";
  const styles = {
    primary: base + " hover:bg-amber-300",
    secondary: base + " bg-amber-200 hover:bg-amber-100",
  };
  console.log(styles);
  if (to) {
    return (
      <NavLink to={to} className={styles[className]}>
        {children}
      </NavLink>
    );
  }

  return (
    <button onClick={onClick} className={styles[className]}>
      {children}
    </button>
  );
}

export default Button;
