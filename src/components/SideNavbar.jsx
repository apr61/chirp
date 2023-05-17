import { useState } from "react";
import { FiHash, FiLogOut, FiUser } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { FaFeatherAlt } from "react-icons/fa";
import Button from "./Button";
import Modal from "./Modal";
import NavItem from "./NavItem";
import ComposeChirpForm from "./ComposeChirpForm";
import useAuthContext from "../hooks/useAuthContext";
import Logo from "./Logo";

export default function SideNavBar() {
  const [openComposeChirp, setOpenComposeChirp] = useState(false);
  const { logOutUser, currentUserDetails } = useAuthContext();

  function handleComposeChirp() {
    setOpenComposeChirp(!openComposeChirp);
  }
  function handleLogOut() {
    logOutUser();
  }
  return (
    <>
      <aside
        className={`fixed z-20 w-full bottom-0 bg-white border sm:sticky sm:top-0 sm:border-0 sm:p-2 xl:w-[16rem] sm:h-screen`}
      >
        <nav className="w-full flex justify-around sm:flex-col sm:items-center xl:items-start lg:gap-1 xl:gap-2 relative">
          <Logo classes={"hidden sm:block"} />
          <NavItem path="/home" pathName="Home" icon={<AiOutlineHome />} />
          <NavItem path="/explore" pathName="Explore" icon={<FiHash />} />
          <NavItem
            path={`/profile/${currentUserDetails.username}`}
            pathName="Profile"
            icon={<FiUser />}
          />
          <button
            onClick={handleLogOut}
            className="p-3 xl:px-4 xl:py-2 xl:h-12 text-xl flex items-center gap-4 rounded-full text-center transition duration-200 ease-in hover:bg-[--hover-bg] w-fit"
          >
            <span className="text-2xl">
              <FiLogOut />
            </span>
            <span className="hidden xl:block">LogOut</span>
          </button>
        </nav>
        <div className="xl:w-full fixed bottom-16 right-4 sm:static sm:mt-2">
          <Button classes={"w-14 h-14 xl:w-full"} onClick={handleComposeChirp}>
            <span className="hidden xl:block">Chirp</span>
            <span className="xl:hidden">
              <FaFeatherAlt />
            </span>
          </Button>
        </div>
      </aside>
      <Modal isOpen={openComposeChirp} handleModalState={handleComposeChirp}>
        <ComposeChirpForm closeModal={handleComposeChirp} />
      </Modal>
    </>
  );
}
