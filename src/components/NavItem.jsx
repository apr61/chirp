import { NavLink } from "react-router-dom";

function NavItem({ pathName = "", path, icon }) {
  return (
    <li className="rounded-full text-center hover:bg-gray-100 w-fit">
      <NavLink
        className={({ isActive }) =>
          `p-2 sm:p-4 lg:px-4 lg:py-2 text-xl flex items-center gap-4 ${
            isActive && "font-bold"
          }`
        }
        to={path}
      >
        <span className="text-2xl">{icon}</span>
        <span className="sm:hidden lg:block">{pathName}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
