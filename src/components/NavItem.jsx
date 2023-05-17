import { NavLink } from "react-router-dom";

function NavItem({ pathName = "", path, icon }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `p-3 xl:px-4 xl:py-2 xl:h-12 text-xl flex items-center gap-4 rounded-full text-center transition duration-200 ease-in hover:bg-[--hover-bg] w-fit ${
          isActive && "font-bold"
        }`
      }
      to={path}
    >
      <span className="text-2xl">{icon}</span>
      <span className="hidden xl:block">{pathName}</span>
    </NavLink>
  );
}

export default NavItem;
