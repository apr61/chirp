import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import SideSuggestions from "../components/SideSuggestions";

function MainLayout() {
  return (
    <main className="lg:max-w-5xl xl:max-w-6xl sm:max-w-2xl mx-auto flex min-h-screen">
      <SideNavbar />
      <div className="sm:border-x lg:max-w-md xl:max-w-xl w-full border-slate-100 relative">
        <Outlet />
      </div>
      <SideSuggestions />
    </main>
  );
}

export default MainLayout;
