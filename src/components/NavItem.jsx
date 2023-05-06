import { NavLink } from "react-router-dom";

function NavItem({ pathName = "", path, icon }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `p-3 xl:px-4 xl:py-2 text-xl flex items-center gap-4 rounded-full text-center hover:bg-gray-100 w-fit ${
          isActive && "font-bold"
        }`
      }
      to={path}
    >
      <span className="text-2xl">{icon}</span>
      <span className="sm:hidden xl:block">{pathName}</span>
    </NavLink>
  );
}

export default NavItem;
