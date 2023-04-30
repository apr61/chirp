import { createContext, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { logOut } from "../services/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export default function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user))
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
        <AuthContext.Provider value={{currentUser, loading, logOutUser}}>
            {children}
        </AuthContext.Provider>
    )
}