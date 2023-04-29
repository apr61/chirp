import { useContext } from "react";
import {SignUpContext} from "../context/SignUpUserContext";

export default function useSignUpContext(){
    return useContext(SignUpContext)
}