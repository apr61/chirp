import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import SideSuggestions from "../components/SideSuggestions";

function MainLayout() {
  return (
    <div className="lg:max-w-[70rem] md:max-w-[45rem] mx-auto sm:grid sm:grid-cols-[auto_1fr] min-h-screen">
      <SideNavbar />
      <main className="sm:grid sm:grid-cols-[1fr_auto]">
        <div className="sm:border-x border-slate-100 relative">
          <Outlet />
        </div>
        <SideSuggestions />
      </main>
    </div>
  );
}

export default MainLayout;