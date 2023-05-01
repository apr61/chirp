import { createContext, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { getUserDetails, logOut } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { getChiprsBasedOnUserId } from "../services/chirps";

export const AuthContext = createContext()

export default function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState({})
    const [currentUserDetails, setCurrentUserDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            try{
                setLoading(true)
                getUserDetails(user.uid)
                .then((userDetails) => {
                    setCurrentUserDetails(userDetails)
                })
                getChiprsBasedOnUserId(user.uid)
            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        })
        return unsubscribe
    }, [])
    function logOutUser(){
        try{
            setLoading(true)
            logOut()
            .then(() => {
                navigate('/')
            }).catch(err => console.log(err))
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }
    return (
        <AuthContext.Provider value={{currentUser, loading, logOutUser, currentUserDetails}}>
            {children}
        </AuthContext.Provider>
    )
}