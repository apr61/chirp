import { createContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getChirpById,
  toggleLikeChirp,
  toggleRechirpChirp,
} from "../services/chirps";
import useChirpContext from "../hooks/useChirpContext";

export const ChirpThreadContext = createContext();

function ChirpThreadProvider({ children }) {
  const { cid } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [chirp, setChirp] = useState({});
  const { getChirpReplies } = useChirpContext();
  const getData = async (cid) => {
    try {
      const chirpData = await getChirpById(cid);
      setChirp(chirpData);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useMemo(() => {
    setIsLoading(true);
    getData(cid);
  }, [cid]);
  function likeChirpLocal(userId, isLiked) {
    if (isLiked) {
      return setChirp({
        ...chirp,
        likes: chirp.likes.filter((uid) => uid !== userId),
      });
    }
    return setChirp({ ...chirp, likes: [...chirp.likes, userId] });
  }
  function rechirpChirpLocal(userId, isRechirped) {
    if (isRechirped) {
      return setChirp({
        ...chirp,
        rechirps: chirp.rechirps.filter((uid) => uid !== userId),
      });
    }
    return setChirp({ ...chirp, rechirps: [...chirp.rechirps, userId] });
  }
  function onChirpLike(chirpId, userId, isLiked) {
    toggleLikeChirp(chirpId, userId, isLiked).then(() => {
      likeChirpLocal(userId, isLiked);
    });
  }
  function onChirpReChirp(chirpId, userId, isRechirped) {
    toggleRechirpChirp(chirpId, userId, isRechirped).then(() => {
      rechirpChirpLocal(userId, isRechirped);
    });
  }
  return (
    <ChirpThreadContext.Provider
      value={{
        isLoading,
        chirp,
        onChirpLike,
        onChirpReChirp,
        replies: getChirpReplies(chirp.chirpId),
      }}
    >
      {children}
    </ChirpThreadContext.Provider>
  );
}

export default ChirpThreadProvider;
