import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import SideSuggestions from "../components/SideSuggestions";

function MainLayout() {
  return (
    <main className="max-w-6xl mx-auto flex min-h-screen">
      <SideNavbar />
      <div className="w-2/4 border-x border-slate-100 relative">
        <Outlet />
      </div>
      <SideSuggestions />
    </main>
  );
}

export default MainLayout;
