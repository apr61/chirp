import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Logo({ classes }) {
  return (
    <Link
      to="/"
      className={`flex p-3 hover:bg-gray-100 text-2xl rounded-full w-fit transition duration-200 ease-in ${classes}`}
    >
      <FaTwitter className="text-teal-400" />
    </Link>
  );
}

export default Logo;
