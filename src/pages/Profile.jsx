import { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import Header from "../components/Header";
import TabBtn from "../components/TabBtn";
import Button from "../components/Button";
import useAuthContext from "../hooks/useAuthContext";
import useProfileContext from "../hooks/useProfileContext";
import SingleChirp from "../components/SingleChirp";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Chirps");
  const { currentUserDetails } = useAuthContext();
  const navigate = useNavigate();
  const { isLoading, chirps, userDetails, onToggleFollowBtn } =
    useProfileContext();

  function handleActiveTab(e) {
    setActiveTab(e.target.textContent);
  }
  function navBack() {
    navigate(-1);
  }
  function getIsFollower() {
    return userDetails.followers.indexOf(currentUserDetails.uid) !== -1;
  }
  function handleToggleFollowBtn() {
    onToggleFollowBtn(
      userDetails.userId,
      currentUserDetails.uid,
      getIsFollower()
    );
  }
  if (isLoading) return "Loading...";

  return (
    <>
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
            <p className="text-slate-500">{chirps.length} Chirps</p>
          </div>
        </div>
      </Header>
      <div>
        <div className="h-40 sm:h-52 w-full relative">
          <img
            src={userDetails.headerImg}
            className="h-full w-full object-cover"
            alt="User header pic"
            loading="lazy"
          />
          <div className="absolute -bottom-10 left-4 sm:-bottom-20 sm:left-4 w-24 h-24 sm:h-40 sm:w-40">
            <img
              src={userDetails.profileUrl}
              className="rounded-full border-4 border-white object-cover"
              alt="User header pic"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-12 right-2 sm:-bottom-16 sm:right-8">
            {userDetails.userId === currentUserDetails.uid ? (
              <Button small outline>
                Edit Profile
              </Button>
            ) : (
              <Button
                onClick={handleToggleFollowBtn}
                small
                outline={getIsFollower()}
                black={!getIsFollower()}
              >
                {getIsFollower() ? "Following" : "Follow"}
              </Button>
            )}
          </div>
        </div>
        <div className="mt-10 sm:mt-20 ml-4">
          <h2 className="text-xl font-bold">{userDetails.name}</h2>
          <p className="text-gray-700">@{userDetails.username}</p>
          <div className="flex gap-2 items-center text-gray-700 my-4">
            <span>
              <BsCalendar3 />
            </span>
            <p>Joined August 2022</p>
          </div>
          <div className="flex gap-4 text-gray-700">
            <Link to={`/${userDetails.username}/following`}>
              <span className="font-bold text-black">
                {userDetails.following?.length}
              </span>{" "}
              Following
            </Link>
            <Link to={`/${userDetails.username}/followers`}>
              <span className="font-bold text-black">
                {userDetails.followers?.length}
              </span>{" "}
              Followers
            </Link>
          </div>
        </div>
        <div className="flex mt-4 border-b border-slate-100 overflow-x-auto">
          <TabBtn
            text="Chirps"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
          <TabBtn
            text="Replies"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
          <TabBtn
            text="Media"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
          <TabBtn
            text="Likes"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
        </div>
        <div className="py-2">
          {activeTab === "Chirps" &&
            chirps.map((chirp) => {
              return <SingleChirp chirp={chirp} key={chirp.chirpId} />;
            })}
        </div>
      </div>
    </>
  );
}
