import { NavLink } from "react-router-dom";

function ViewCart() {
  return (
    <div className="flex items-center justify-around py-2 uppercase border-t-4 border-amber-300 font-bold ">
      <p>
        Your total is: <span>$$$</span>
      </p>
      <NavLink className="flex items-center">
        View cart <span className="text-2xl pl-8">&rarr;</span>
      </NavLink>
    </div>
  );
}

export default ViewCart;
