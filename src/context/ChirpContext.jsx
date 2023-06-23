import { createContext, useEffect, useMemo, useReducer } from "react";
import chirpReducer, { ChirpInitialState } from "../reducers/chirpReducer";
import {
  createNewChirpService,
  deleteChirpByIdService,
  getAllChirpsService,
  toggleLikeChirpService,
  toggleRechirpChirpService,
} from "../services/chirps";

export const ChirpContext = createContext();

export default function ChirpProvider({ children }) {
  const [chirpState, chirpDispatch] = useReducer(
    chirpReducer,
    ChirpInitialState
  );
  const getAllChirps = async () => {
    try {
      chirpDispatch({ type: "LOADING", payload: true });
      const data = await getAllChirpsService();
      chirpDispatch({ type: "DISPLAY_CHIRPS", payload: [...data] });
    } catch (err) {
      console.error(err.code);
    } finally {
      chirpDispatch({ type: "LOADING", payload: false });
    }
  };
  useEffect(() => {
    getAllChirps();
  }, []);
  const chirpsByParentId = useMemo(() => {
    if (chirpState.chirps == null) return [];
    const group = {};
    chirpState.chirps.forEach((chirp) => {
      group[chirp.parentId] ||= [];
      group[chirp.parentId].push(chirp);
    });
    return group;
  }, [chirpState.chirps]);
  function getChirpReplies(parentId) {
    return chirpsByParentId[parentId];
  }
  const createLocalAndServerChirp = async (newChirp) => {
    const newChirpCreated = await createNewChirpService(newChirp);
    chirpDispatch({ type: "ADD_NEW_CHIRP", payload: newChirpCreated });
  };
  const deleteLocalAndServerChirp = async (chirpId) => {
    chirpDispatch({ type: "DELETE_A_CHIRP", payload: chirpId });
    await deleteChirpByIdService(chirpId);
  };
  const chirpLikeLocalAndServer = async (chirpId, userId, isLiked) => {
    chirpDispatch({
      type: "LIKE_UNLIKE_A_CHIRP",
      payload: { chirpId, userId, isLiked },
    });
    await toggleLikeChirpService(chirpId, userId, isLiked);
  };
  const chirpRechirpLoacalAndServer = async (chirpId, userId, isRechirped) => {
    chirpDispatch({
      type: "RECHIRP",
      payload: { chirpId, userId, isRechirped },
    });
    await toggleRechirpChirpService(chirpId, userId, isRechirped);
  };
  const getChirpById = (cid) => {
    return chirpState.chirps.filter((chirp) => chirp.chirpId === cid)[0];
  };
  const getChirpsForCurrentUser = (userId) => {
    return chirpState.chirps.filter((chirp) => chirp.userId === userId);
  };
  return (
    <ChirpContext.Provider
      value={{
        rootChirps: chirpsByParentId[null],
        getChirpReplies,
        ...chirpState,
        createLocalAndServerChirp,
        deleteLocalAndServerChirp,
        chirpLikeLocalAndServer,
        chirpRechirpLoacalAndServer,
        getChirpById,
        chirpDispatch,
        getChirpsForCurrentUser,
      }}
    >
      {children}
    </ChirpContext.Provider>
  );
}
