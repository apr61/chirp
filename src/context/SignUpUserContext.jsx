import { createContext, useReducer } from "react";
import { signUpReducer } from "./reducers";

export const SignUpContext = createContext()

const signUpInitialValue = {
    name: "",
    email: "",
    dob: "",
    password: "",
    cpassword: "",
}

export default function SignUpProvider({children}){
    
    const [signUpState, signUpDispatch] = useReducer(signUpReducer, signUpInitialValue);
    function handleInputOnChange(e){
        signUpDispatch({type: e.target.name, payload: e.target.value})
    }
    return(
        <SignUpContext.Provider value={{signUpState, signUpDispatch, handleInputOnChange}}>
            {children}
        </SignUpContext.Provider>
    )
}