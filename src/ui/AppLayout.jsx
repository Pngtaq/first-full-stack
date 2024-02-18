import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Header />

      <main className="mx-auto my-5 max-w-4xl">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
