import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

function Logo() {
  return (
    <Link
      to="/"
      className={`flex p-3 hover:bg-gray-100 text-2xl rounded-full w-fit`}
    >
      <FaTwitter className="text-teal-400" />
    </Link>
  );
}

export default Logo;
