export const ChirpInitialState = {
  chirps: [],
  isLoading: false,
  error: null,
};

const chirpReducer = (state, { type, payload }) => {
  let updatedChirps = [];
  switch (type) {
    case "DISPLAY_CHIRPS":
      return {
        ...state,
        chirps: payload,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: payload,
      };
    case "ERROR":
      return {
        ...state,
        error: payload,
      };
    case "ADD_NEW_CHIRP":
      return {
        ...state,
        chirps: [payload, ...state.chirps],
      };
    case "DELETE_A_CHIRP":
      return {
        ...state,
        chirps: state.chirps.filter((chirp) => chirp.id !== payload),
      };
    case "LIKE_UNLIKE_A_CHIRP":
      updatedChirps = state.chirps.map((chirp) => {
        if (chirp.chirpId === payload.chirpId) {
          if (payload.isLiked) {
            return {
              ...chirp,
              likes: chirp.likes.filter((uid) => uid !== payload.userId),
            };
          }
          return { ...chirp, likes: [payload.userId, ...chirp.likes] };
        } else {
          return chirp;
        }
      });
      return {
        ...state,
        chirps: [...updatedChirps],
      };
    case "RECHIRP":
      updatedChirps = state.chirps.map((chirp) => {
        if (chirp.chirpId === payload.chirpId) {
          if (payload.isRechirped) {
            return {
              ...chirp,
              rechirps: chirp.rechirps.filter((uid) => uid !== payload.userId),
            };
          }
          return { ...chirp, rechirps: [payload.userId, ...chirp.rechirps] };
        } else {
          return chirp;
        }
      });
      return {
        ...state,
        chirps: [...updatedChirps],
      };
    default:
      return state;
  }
};

export default chirpReducer;
