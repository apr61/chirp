import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
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

export const getFollowersList = async (userId) => {
  let FollowersList = [];
  const docRef = doc(db, "users-details", userId);
  const docSnapShot = await getDoc(docRef);
  const followersUserIds = docSnapShot.data().followers;
  const requests = followersUserIds.map((uid) => doc(db, "users-details", uid));
  const usersQSnap = await Promise.all(requests);
  console.log(requests);
  // usersQSnap.forEach((qSnap) => {
  //   console.log({ userId: qSnap.id, ...qSnap.data() });
  // });
};
