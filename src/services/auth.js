import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../FirebaseConfig'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export const signUp = async (email, password, name, dob, username) => {
    const userCredentials =  await createUserWithEmailAndPassword(auth, email, password)
    return await setDoc(doc(db, "users-details", userCredentials.user.uid), {
        name: name,
        email: email,
        dob: dob,
        username: username,
        followers: 0,
        following: 0,
        headerImg: 'https://firebasestorage.googleapis.com/v0/b/chirp-react-1fc3d.appspot.com/o/header-img.jpg?alt=media&token=632452e3-3607-48f6-a34c-884f5fddaf11',
        profileUrl: 'https://firebasestorage.googleapis.com/v0/b/chirp-react-1fc3d.appspot.com/o/blank-profile-picture.webp?alt=media&token=256b4697-fb80-43e6-9523-03e8186bd9dc'
    })
}

export const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

export const logOut = async () => {
    return await signOut(auth)
}

export const getUserDetails = async (userId) => {
    const docRef = doc(db, "users-details", userId)
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()){
        return {uid: userId, ...docSnap.data()}
    }
    return new Promise.reject('User Not Found...')
}