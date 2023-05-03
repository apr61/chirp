import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiHome,
  FiHash,
  FiMessageSquare,
  FiBell,
  FiMoreHorizontal,
  FiBookmark,
  FiUser,
} from "react-icons/fi";
import Button from "./Button";
import Modal from "./Modal";
import ComposeChirpForm from "./ComposeChirpForm";
import useAuthContext from "../hooks/useAuthContext";

const linksWithText = [
  { path: "/home", pathName: "Home", icon: <FiHome /> },
  { path: "/explore", pathName: "Explore", icon: <FiHash /> },
  { path: "/notifications", pathName: "Notifications", icon: <FiBell /> },
  { path: "/messages", pathName: "Messages", icon: <FiMessageSquare /> },
  { path: "/bookmarks", pathName: "Bookmarks", icon: <FiBookmark /> },
  { path: "/profile", pathName: "Profile", icon: <FiUser /> },
];

export default function SideNavBar() {
  const [openComposeChirp, setOpenComposeChirp] = useState(false);
  const [openUserOptions, setOpenUserOptions] = useState(false);
  const { loading, logOutUser, currentUserDetails } = useAuthContext();

  function handleComposeChirp() {
    setOpenComposeChirp(!openComposeChirp);
  }
  function handleUserOptions() {
    setOpenUserOptions(!openUserOptions);
  }
  function handleLogOut() {
    logOutUser();
  }
  return (
    <>
      <aside className="sticky top-0 h-screen overflow-x-auto">
        <ul className="flex flex-col gap-4 p-4 h-screen">
          <li>
            <Link to="/">Logo</Link>
          </li>
          {linksWithText.map((link) => (
            <li
              className="rounded-full max-w-fit text-center hover:bg-gray-100 w-48"
              key={link.pathName}
            >
              <NavLink
                className={({ isActive }) =>
                  `px-4 py-2 h-full w-full text-xl flex items-center gap-4 ${
                    isActive && "font-bold"
                  }`
                }
                to={link.path}
              >
                <span>{link.icon}</span>
                {link.pathName}
              </NavLink>
            </li>
          ))}
          <li className="rounded-full max-w-fit text-center hover:bg-gray-100 w-48">
            <button className="px-4 py-2 w-full flex items-center gap-4 text-xl">
              <span>
                <FiMoreHorizontal />
              </span>{" "}
              More
            </button>
          </li>
          <Button onClick={handleComposeChirp}>Chirp</Button>
          <div className="mt-auto relative w-full">
            <li className="border-gray-200 rounded-full hover:bg-gray-100 focus:ring-1 relative p-2">
              <button
                className="flex gap-2 items-center justify-between"
                onClick={handleUserOptions}
              >
                <img
                  src={currentUserDetails.profileUrl}
                  className="w-12 h-12 object-cover rounded-full"
                  loading="lazy"
                  alt={currentUserDetails.name}
                />
                <div className="flex flex-col items-start text-start">
                  <h3 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis w-36">
                    {currentUserDetails.name}
                  </h3>
                  <p className="text-slate-700">
                    @{currentUserDetails.username}
                  </p>
                </div>
                <span>
                  <FiMoreHorizontal />
                </span>
              </button>
            </li>
            {openUserOptions && (
              <div className="absolute -top-20 w-full border border-gray-300 rounded-xl py-4 shadow-md">
                <button
                  onClick={handleLogOut}
                  className="w-full hover:bg-gray-100 p-2 bg-white"
                >
                  {loading ? "Loading..." : "Logout"}
                </button>
              </div>
            )}
          </div>
        </ul>
      </aside>
      <Modal isOpen={openComposeChirp} handleModalState={handleComposeChirp}>
        <ComposeChirpForm closeModal={handleComposeChirp} />
      </Modal>
    </>
  );
}
