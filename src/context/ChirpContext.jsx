import { createContext, useEffect, useState } from "react"
import useAuthContext from '../hooks/useAuthContext'
import { createNewChirp, deleteChirpById, getAllChirps, getChiprsBasedOnUserId } from "../services/chirps"

export const ChirpContext = createContext()

export default function ChirpProvider({ children }) {
    const { currentUserDetails } = useAuthContext()
    const [loggedInUserChirps, setLoggedInUserChirps] = useState([])
    const [allChirps, setAllChirps] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (currentUserDetails.uid) {
            getChiprsBasedOnUserId(currentUserDetails.uid)
                .then((chirps) => setLoggedInUserChirps(chirps))
        }
    }, [currentUserDetails, allChirps])
    useEffect(() => {
        setIsLoading(true)
        getAllChirps()
            .then(allChirps => setAllChirps(allChirps))
            .finally(() => {
                setIsLoading(false)
            })
    }, [])
    async function createNewAndLocalChirp(user, message) {
        const newChirp = await createNewChirp(user, message)
        setAllChirps(oldChirps => [newChirp, ...oldChirps])
    }
    function deleteLocalAndServerChirp(chirpId) {
        deleteChirpById(chirpId)
        setAllChirps(chirp => chirp.filter(chirp => chirp.chirpId !== chirpId))
    }
    return (
        <ChirpContext.Provider value={{ loggedInUserChirps, allChirps, isLoading, createNewAndLocalChirp, deleteLocalAndServerChirp }}>
            {children}
        </ChirpContext.Provider>
    )
}