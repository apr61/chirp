import { useContext } from "react";
import { ChirpContext } from "../context/ChirpContext";


export default function useChirpContext(){
    return useContext(ChirpContext)
}