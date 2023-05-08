import { createContext, useEffect, useMemo, useState } from "react";
import {
  createNewChirp,
  deleteChirpById,
  getAllChirps,
  toggleLikeChirp,
  toggleRechirpChirp,
} from "../services/chirps";

export const ChirpContext = createContext();

export default function ChirpProvider({ children }) {
  const [allChirps, setAllChirps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllChirps()
      .then((allChirps) => setAllChirps(allChirps))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const chirpsByParentId = useMemo(() => {
    if (allChirps == null) return [];
    const group = {};
    allChirps.forEach((chirp) => {
      group[chirp.parentId] ||= [];
      group[chirp.parentId].push(chirp);
    });
    return group;
  }, [allChirps]);
  function getChirpReplies(parentId) {
    return chirpsByParentId[parentId];
  }
  async function createLocalAndServerChirp(newChirp) {
    const newChirpCreated = await createNewChirp(newChirp);
    setAllChirps((oldChirps) => [newChirpCreated, ...oldChirps]);
  }
  function deleteLocalAndServerChirp(chirpId) {
    deleteChirpById(chirpId);
    setAllChirps((chirp) => chirp.filter((chirp) => chirp.chirpId !== chirpId));
  }
  function chirpLikeLocalAndServer(chirpId, userId, isLiked) {
    toggleLikeChirp(chirpId, userId, isLiked).then(() => {
      return setAllChirps((oldChirps) =>
        oldChirps.map((chirp) => {
          if (chirp.chirpId === chirpId) {
            if (isLiked) {
              return {
                ...chirp,
                likes: chirp.likes.filter((uid) => uid !== userId),
              };
            }
            return { ...chirp, likes: [userId, ...chirp.likes] };
          } else {
            return chirp;
          }
        })
      );
    });
  }
  function chirpRechirpLoacalAndServer(chirpId, userId, isRechirped) {
    toggleRechirpChirp(chirpId, userId, isRechirped).then(() =>
      setAllChirps((oldChirps) =>
        oldChirps.map((chirp) => {
          if (chirp.chirpId === chirpId) {
            if (isRechirped) {
              return {
                ...chirp,
                rechirps: chirp.rechirps.filter((uid) => uid !== userId),
              };
            }
            return { ...chirp, rechirps: [userId, ...chirp.rechirps] };
          } else {
            return chirp;
          }
        })
      )
    );
  }

  function getChirpsForCurrentUser(userId) {
    return allChirps.filter((chirp) => chirp.user.uid === userId);
  }
  function getChirpById(chirpId) {
    return allChirps.filter((chirp) => chirp.chirpId === chirpId);
  }

  return (
    <ChirpContext.Provider
      value={{
        rootChirps: chirpsByParentId[null],
        getChirpReplies,
        isLoading,
        createLocalAndServerChirp,
        deleteLocalAndServerChirp,
        chirpLikeLocalAndServer,
        chirpRechirpLoacalAndServer,
        getChirpsForCurrentUser,
        getChirpById,
      }}
    >
      {children}
    </ChirpContext.Provider>
  );
}
