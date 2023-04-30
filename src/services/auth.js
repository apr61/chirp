import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../FirebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

export const signUp = async (email, password, name, dob) => {
    const userCredentials =  await createUserWithEmailAndPassword(auth, email, password)
    return await addDoc(collection(db, "users-details"), {
        userId: userCredentials.user.uid,
        name: name,
        email: email,
        dob: dob
    })
}

export const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

export const logOut = async () => {
    return await signOut(auth)
}