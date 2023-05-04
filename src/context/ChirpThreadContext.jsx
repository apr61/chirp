import { createContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getChirpById,
  getRepliesById,
  toggleLikeChirp,
  toggleRechirpChirp,
} from "../services/chirps";

export const ChirpThreadContext = createContext();

function ChirpThreadProvider({ children }) {
  const { cid } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [chirp, setChirp] = useState({});
  const [replies, setReplies] = useState([]);
  const getData = async (cid) => {
    try {
      const chirpData = await getChirpById(cid);
      const repliesData = await getRepliesById(cid);
      setChirp(chirpData);
      setReplies(repliesData);
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
      value={{ isLoading, chirp, replies, onChirpLike, onChirpReChirp }}
    >
      {children}
    </ChirpThreadContext.Provider>
  );
}

export default ChirpThreadProvider;
