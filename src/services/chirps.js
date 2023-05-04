import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const createNewChirp = async (newChirp) => {
  const docRef = await addDoc(collection(db, "chirps"), newChirp);
  return {
    chirpId: docRef.id,
    ...newChirp,
  };
};

export const getChiprsBasedOnUserId = async (userId) => {
  const usersChirps = [];
  const q = query(collection(db, "chirps"), where("user.uid", "==", userId));
  const querySnapShot = await getDocs(q);
  querySnapShot.forEach((doc) => {
    usersChirps.push({ chirpId: doc.id, ...doc.data() });
  });
  return [...usersChirps];
};

export const getAllChirps = async () => {
  const allChirps = [];
  const querySnapShot = await getDocs(collection(db, "chirps"));
  querySnapShot.forEach((doc) => {
    allChirps.push({ chirpId: doc.id, ...doc.data() });
  });
  return [...allChirps];
};

export const deleteChirpById = async (chirpId) => {
  return await deleteDoc(doc(db, "chirps", chirpId));
};

export const toggleLikeChirp = async (chirpId, userId, isLiked) => {
  const docRef = doc(db, "chirps", chirpId);
  return await updateDoc(docRef, {
    likes: !isLiked ? arrayUnion(userId) : arrayRemove(userId),
  });
};

export const toggleRechirpChirp = async (chirpId, userId, isRechirped) => {
  const docRef = doc(db, "chirps", chirpId);
  return await updateDoc(docRef, {
    rechirps: isRechirped ? arrayRemove(userId) : arrayUnion(userId),
  });
};

export const getChirpById = async (chirpId) => {
  const docRef = doc(db, "chirps", chirpId);
  const docSnap = await getDoc(docRef);
  return { chirpId: chirpId, ...docSnap.data() };
};

export const getRepliesById = async (chirpId) => {
  const replies = [];
  const q = query(collection(db, "chirps"), where("parentId", "==", chirpId));
  const querySnapShot = await getDocs(q);
  querySnapShot.forEach((doc) => {
    replies.push({ chirpId: doc.id, ...doc.data() });
  });
  return replies;
};
