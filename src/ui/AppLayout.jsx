import { Outlet } from "react-router-dom";
import Header from "./Header";
import ViewCart from "../pages/ViewCart";

function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-amber-100">
      <Header />
      <div className="scroll-auto">
        <main className="mx-auto my-4 max-w-4xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
