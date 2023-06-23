import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useChirpContext from "../hooks/useChirpContext";
import { getUserDetailsByUsername } from "../services/profile";

export const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const { uname: username } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Chirps");
  const { getChirpsForCurrentUser } = useChirpContext();
  const getUserData = async (username) => {
    try {
      const data = await getUserDetailsByUsername(username);
      setUserDetails(data);
    } catch (err) {
      caonsole.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUserData(username);
  }, [username]);
  const chirps = getChirpsForCurrentUser(userDetails.userId);
  console.log(userDetails);
  function setLocalFollowers(requestedUserId, isFollower) {
    setUserDetails((user) => {
      if (isFollower) {
        return {
          ...user,
          followers: [
            ...user.followers.filter((userid) => userid !== requestedUserId),
          ],
        };
      }
      return {
        ...user,
        followers: [...user.followers, requestedUserId],
      };
    });
  }
  const allChirps = () => {
    if (activeTab === "Likes")
      return chirps.filter(
        (chirp) => chirp.likes.indexOf(userDetails.userId) !== -1
      );
    else if (activeTab === "Replies")
      return chirps.filter((chirp) => chirp.replyingTo);
    else if (activeTab === "Chirps")
      return chirps.filter((chirp) => !chirp.replyingTo);
    else return [];
  };
  return (
    <ProfileContext.Provider
      value={{
        isLoading,
        chirps,
        filteredChirps: allChirps(),
        userDetails,
        setLocalFollowers,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
