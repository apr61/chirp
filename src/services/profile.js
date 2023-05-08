import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const getUserDetailsByUsername = async (username) => {
  const userDetails = [];
  const q = query(
    collection(db, "users-details"),
    where("username", "==", username)
  );
  const querySnapShot = await getDocs(q);
  querySnapShot.forEach((doc) => {
    userDetails.push({ userId: doc.id, ...doc.data() });
  });
  return userDetails[0];
};

export const toggleFollow = async (userId, requestedUserId, isFollower) => {
  const docRefUser = doc(db, "users-details", userId);
  await updateDoc(docRefUser, {
    followers: isFollower
      ? arrayRemove(requestedUserId)
      : arrayUnion(requestedUserId),
  });
  const docRefRequestedUser = doc(db, "users-details", requestedUserId);
  return await updateDoc(docRefRequestedUser, {
    following: isFollower ? arrayRemove(userId) : arrayUnion(userId),
  });
};
