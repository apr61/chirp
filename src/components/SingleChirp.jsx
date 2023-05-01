import { FaRegComment, FaRetweet, FaRegHeart, FaShare, FaTrash } from 'react-icons/fa'
import useAuthContext from '../hooks/useAuthContext'
import useChirpContext from '../hooks/useChirpContext'

function SingleChirp({ chirp }) {
    const { currentUserDetails } = useAuthContext()
    const {deleteLocalAndServerChirp}  = useChirpContext()
    const { uid, name, username, profileUrl } = chirp.user
    const { chirpId, message, comments, rechirps, likes, postedAt } = chirp
    function handleChirpDelete(){
        deleteLocalAndServerChirp(chirpId)
        console.log(1)
    }
    return (
        <article className="flex gap-4 p-2 items-start border-b border-gray-300 hover:bg-gray-100">
            <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden">
                <img src={profileUrl} className="w-full h-full object-cover" />
            </div>
            <div className="">
                <div className="flex items-center gap-2">
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-slate-500">@{username}</p>
                    <p className="text-slate-500"> - { }</p>
                </div>
                <p>
                    {message}
                </p>
                <div className="flex items-center gap-8 mt-2">
                    <button title="Comment" className="group flex items-center gap-2 hover:text-teal-500">
                        <span className="group-hover:bg-teal-200 rounded-full p-2">
                            <FaRegComment />
                        </span>
                        {comments}
                    </button>
                    <button title="Rechirp" className="group flex items-center gap-4 hover:text-green-500">
                        <span className="group-hover:bg-green-200 rounded-full p-2">
                            <FaRetweet />
                        </span>
                        {rechirps}
                    </button>
                    <button title="Like" className="group flex items-center gap-4 hover:text-pink-500">
                        <span className="group-hover:bg-pink-200 rounded-full p-2">
                            <FaRegHeart />
                        </span>
                        {likes}
                    </button>
                    <button title="Share" className="group flex items-center gap-4 hover:text-teal-500">
                        <span className="group-hover:bg-teal-200 rounded-full p-2">
                            <FaShare />
                        </span>
                    </button>
                    {
                        currentUserDetails.uid === uid && (
                            <button title="Delete" className="group flex items-center gap-4 hover:text-red-500" onClick={handleChirpDelete}>
                                <span className="group-hover:bg-red-200 rounded-full p-2">
                                    <FaTrash />
                                </span>
                                Delete
                            </button>
                        )
                    }
                </div>
            </div>
        </article>
    )
}

export default SingleChirp