import { createContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import useChirpContext from "../hooks/useChirpContext";
import { getUserDetailsByUsername, toggleFollow } from "../services/profile";

export const ProfileContext = createContext();
function ProfileProvider({ children }) {
  const { uname: username } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { getChirpsForCurrentUser } = useChirpContext();
  const chirps = getChirpsForCurrentUser(userDetails?.userId);
  const getUserData = async (username) => {
    try {
      setIsLoading(true);
      const data = await getUserDetailsByUsername(username);
      setUserDetails(data);
    } catch (err) {
      caonsole.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useMemo(() => {
    getUserData(username);
  }, [username]);
  async function onToggleFollowBtn(userId, requestedUserId, isFollower) {
    await toggleFollow(userId, requestedUserId, isFollower);
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

  return (
    <ProfileContext.Provider
      value={{ isLoading, chirps, userDetails, onToggleFollowBtn }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
