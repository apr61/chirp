import Header from '../components/Header'
import useAuthContext from '../hooks/useAuthContext'

export default function Bookmarks() {
  const { currentUserDetails } = useAuthContext()
  return (
    <>
      <Header>
        <div className="py-2 px-4 flex flex-col">
          <h1 className="font-bold text-xl">Bookmarks</h1>
          <p className="text-slate-500">@{currentUserDetails.username}</p>
        </div>
      </Header>
    </>
  )
}