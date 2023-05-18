import useAuthContext from "./useAuthContext";
import { getUserDetailsById, toggleFollow } from "../services/profile";
import { useEffect, useState } from "react";

function useFollow({ userId }) {
  const { currentUserDetails } = useAuthContext();
  const [isFollowing, setIsFollowing] = useState(false);
  const requestedUserId = currentUserDetails.uid;
  useEffect(() => {
    async function init() {
      const user = await getUserDetailsById(userId);
      setIsFollowing(user.followers.indexOf(requestedUserId) !== -1);
    }
    init();
  }, [userId]);

  const toggleFollowBtn = async () => {
    await toggleFollow(userId, requestedUserId, isFollowing);
    setIsFollowing((isFollower) => !isFollower);
  };
  return {
    toggleFollowBtn,
    isFollowing,
  };
}

export default useFollow;
