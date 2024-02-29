import { NavLink, useNavigate } from "react-router-dom";

function Button({ children, onClick, to, className, type }) {
  const navigate = useNavigate();
  const base =
    "border-2 border-amber-400 rounded-lg font-bold text-sm duration-300 hover:text-[0.85rem]";
  const styles = {
    primary: base + " px-6 py-4 hover:bg-amber-300",
    secondary:
      base + " px-6 py-4 bg-amber-200 hover:bg-amber-100 hover:text-amber-500 ",
    tertiary: base + " px-2 py-1 hover:bg-amber-300",

    header: "duration-300 hover:text-amber-500 font-bold hover:text-[1.05rem] ",
    viewCart: "flex items-center duration-300 font-bold hover:text-[1.06rem] ",
    backButton: base + " px-8 py-4 hover:bg-amber-300 absolute left-4 bottom-4",
  };

  if (type === "back") {
    return (
      <button onClick={() => navigate(-1)} className={styles[className]}>
        {children}
      </button>
    );
  }

  if (to) {
    return (
      <NavLink to={to} className={styles[className]}>
        {children}
      </NavLink>
    );
  }

  return (
    <button onClick={onClick} className={styles[className]} type={type}>
      {children}
    </button>
  );
}

export default Button;
