import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useProfileContext from "../hooks/useProfileContext";
import Header from "./Header";

function FollowersList() {
  const { isLoading, userDetails } = useProfileContext();
  const navigate = useNavigate();
  function navBack() {
    navigate(-1);
  }
  if (isLoading) return "Loading...";
  return (
    <Header>
      <div className="flex gap-4 px-4 py-2 items-center">
        <button
          onClick={navBack}
          className="rounded-full w-8 h-8 hover:bg-gray-200 flex items-center justify-center"
        >
          <FaArrowLeft />
        </button>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{userDetails.name}</h1>
          <p className="text-slate-500">
            {userDetails?.followers.length} Followers
          </p>
        </div>
      </div>
    </Header>
  );
}

export default FollowersList;
