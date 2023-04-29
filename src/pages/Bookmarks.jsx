import Header from '../components/Header'
import {user} from '../App'

export default function Bookmarks(){
  return(
    <>
    <Header>
        <div className="py-2 px-4 flex flex-col">
            <h1 className="font-bold text-xl">Bookmarks</h1>
            <p className="text-slate-500">@{user.username}</p>
        </div>
    </Header>
    </>
  )
}