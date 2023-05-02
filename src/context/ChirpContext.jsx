import { createContext, useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import {
  createNewChirp,
  deleteChirpById,
  getAllChirps,
  getChiprsBasedOnUserId,
  toggleLikeChirp,
  toggleRechirpChirp,
} from "../services/chirps";

export const ChirpContext = createContext();

export default function ChirpProvider({ children }) {
  const { currentUserDetails } = useAuthContext();
  const [loggedInUserChirps, setLoggedInUserChirps] = useState([]);
  const [allChirps, setAllChirps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (currentUserDetails.uid) {
      getChiprsBasedOnUserId(currentUserDetails.uid).then((chirps) =>
        setLoggedInUserChirps(chirps)
      );
    }
  }, [currentUserDetails, allChirps]);
  useEffect(() => {
    setIsLoading(true);
    getAllChirps()
      .then((allChirps) => setAllChirps(allChirps))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  async function createLocalAndServerChirp(user, message) {
    const newChirp = await createNewChirp(user, message);
    setAllChirps((oldChirps) => [newChirp, ...oldChirps]);
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
  return (
    <ChirpContext.Provider
      value={{
        loggedInUserChirps,
        allChirps,
        isLoading,
        createLocalAndServerChirp,
        deleteLocalAndServerChirp,
        chirpLikeLocalAndServer,
        chirpRechirpLoacalAndServer,
      }}
    >
      {children}
    </ChirpContext.Provider>
  );
}
