import { useContext } from "react";
import { ChirpThreadContext } from "../context/ChirpThreadContext";

export default function useChirpThreadContext() {
  return useContext(ChirpThreadContext);
}
