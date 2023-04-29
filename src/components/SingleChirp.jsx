import {user} from '../App'
import {FaRegComment, FaRetweet, FaRegHeart, FaShare} from 'react-icons/fa'
import {Navigate} from 'react-router-dom'

function SingleChirp(){
    return(
        <article className="flex gap-4 p-2 items-start border-b border-gray-300 hover:bg-gray-100">
            <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden">
                <img src={user.profileImg} className="w-full h-full object-cover"/>
            </div>
            <div className="">
                <div className="flex items-center gap-2">
                    <h3 className="font-bold">{user.fullName}</h3>
                    <p className="text-slate-500">@{user.username}</p>
                    <p className="text-slate-500"> - Apr 22</p>
                </div>
                <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                    </p>
                <div className="flex items-center gap-8 mt-2">
                    <button title="Comment" className="group flex items-center gap-2 hover:text-teal-500">
                        <span className="group-hover:bg-teal-200 rounded-full p-2">
                            <FaRegComment/>
                        </span>
                        111
                    </button>
                    <button title="Rechirp" className="group flex items-center gap-4 hover:text-green-500">
                        <span className="group-hover:bg-green-200 rounded-full p-2">
                            <FaRetweet />
                        </span>
                        111
                    </button>
                    <button title="Like" className="group flex items-center gap-4 hover:text-pink-500">
                        <span className="group-hover:bg-pink-200 rounded-full p-2">
                            <FaRegHeart /> 
                        </span>
                        111
                    </button>
                    <button title="Share" className="group flex items-center gap-4 hover:text-teal-500">
                        <span className="group-hover:bg-teal-200 rounded-full p-2">
                            <FaShare />
                        </span>
                    </button>
                </div>
            </div>
        </article>
    )
}

export default SingleChirp