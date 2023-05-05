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
import { FaTwitter } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <button
        className="block absolute top-2 left-2 z-50 sm:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        <div className="w-10 h-10">
          <img
            src={currentUserDetails.profileUrl}
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
            alt={currentUserDetails.name}
          />
        </div>
      </button>
      <aside
        className={`${
          isMenuOpen ? "opacity-100 z-50 box-shadow-nav" : "opacity-0 z-0"
        } absolute left-0 bottom-0 bg-white sm:block w-[80vw] sm:opacity-100 sm:z-50 sm:w-fit sm:sticky top-0 h-screen overflow-x-auto`}
      >
        <button
          className="absolute top-2 right-2 text-xl sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <AiOutlineClose />
        </button>
        <ul className="flex flex-col gap-4 sm:gap-2 p-4 h-screen sm:items-center lg:items-start lg:gap-4">
          <li className="rounded-full text-center hover:bg-gray-100">
            <Link to="/" className="sm:p-4 text-xl flex items-center">
              <FaTwitter />
            </Link>
          </li>
          {linksWithText.map((link) => (
            <li
              className="rounded-full text-center hover:bg-gray-100"
              key={link.pathName}
            >
              <NavLink
                className={({ isActive }) =>
                  `sm:p-4 lg:px-4 lg:py-2 text-xl flex items-center gap-4 ${
                    isActive && "font-bold"
                  }`
                }
                to={link.path}
              >
                {link.icon}
                <span className="sm:hidden lg:block">{link.pathName}</span>
              </NavLink>
            </li>
          ))}
          <li className="rounded-full text-center hover:bg-gray-100">
            <button className="sm:p-4 lg:px-4 lg:py-2 flex items-center gap-4 text-xl">
              <FiMoreHorizontal />
              <span className="sm:hidden xl:block">More</span>
            </button>
          </li>
          <Button onClick={handleComposeChirp}>
            <span className="hidden lg:block">Chirp</span>
            <span className="text-center lg:hidden">+</span>
          </Button>
          <div className="mt-auto relative">
            <li className="border-gray-200 rounded-full hover:bg-gray-100 focus:ring-1 relative p-2">
              <button
                className="flex gap-2 items-center justify-between"
                onClick={handleUserOptions}
              >
                <div className="w-12 h-12">
                  <img
                    src={currentUserDetails.profileUrl}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                    alt={currentUserDetails.name}
                  />
                </div>
                <div className="sm:hidden lg:block flex flex-col items-start text-start">
                  <h3 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis w-24">
                    {currentUserDetails.name}
                  </h3>
                  <p className="text-slate-700">
                    @{currentUserDetails.username}
                  </p>
                </div>
                <span className="sm:hidden lg:block">
                  <FiMoreHorizontal />
                </span>
              </button>
            </li>
            {openUserOptions && (
              <div className="absolute -top-20 w-full border border-gray-300 rounded-xl py-4 shadow-md bg-white">
                <button
                  onClick={handleLogOut}
                  className="w-full hover:bg-gray-200 p-2 bg-white"
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
