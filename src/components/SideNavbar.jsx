import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiHome, FiHash, FiMessageSquare, FiBell, FiMoreHorizontal, FiBookmark, FiUser } from 'react-icons/fi'
import Button from './Button'
import { user } from '../App'
import Modal from './Modal'
import ComposeChirpForm from './ComposeChirpForm'
import useAuthContext from '../hooks/useAuthContext'

const linksWithText = [
	{ path: '/home', pathName: 'Home', icon: <FiHome /> },
	{ path: '/explore', pathName: 'Explore', icon: <FiHash /> },
	{ path: '/notifications', pathName: 'Notifications', icon: <FiBell /> },
	{ path: '/messages', pathName: 'Messages', icon: <FiMessageSquare /> },
	{ path: '/bookmarks', pathName: 'Bookmarks', icon: <FiBookmark /> },
	{ path: '/profile', pathName: 'Profile', icon: <FiUser /> },
]

export default function SideNavBar() {
	const [openComposeChirp, setOpenComposeChirp] = useState(false)
	const [openUserOptions,  setOpenUserOptions] = useState(false)
	const {loading, logOutUser} = useAuthContext()

	function handleComposeChirp() {
		setOpenComposeChirp(!openComposeChirp)
	}
	function handleUserOptions(){
		setOpenUserOptions(!openUserOptions)
	}
	function handleLogOut(){
		logOutUser()
	}
	return (
		<>
			<aside className="w-64 sticky top-0 h-screen overflow-x-auto">
				<ul className="flex flex-col gap-4 p-8 h-screen">
					<li>
						<Link to='/'>Logo</Link>
					</li>
					{
						linksWithText.map((link) => (
							<li className="rounded-full max-w-fit text-center hover:bg-gray-100 w-48" key={link.pathName}>
								<NavLink className={({ isActive }) => `px-4 py-2 h-full w-full text-xl flex items-center gap-4 ${isActive && 'font-bold'}`} to={link.path}>
									<span>{link.icon}</span>
									{link.pathName}</NavLink>
							</li>
						))
					}
					<li className="rounded-full max-w-fit text-center hover:bg-gray-100 w-48">
						<button className="px-4 py-2 w-full flex items-center gap-4 text-xl">
							<span><FiMoreHorizontal /></span> More
						</button>
					</li>
					<Button onClick={handleComposeChirp}>Chirp</Button>
					<li className="border-gray-200 rounded-full text-center hover:bg-gray-300 w-48 mt-auto focus:ring-1">
						<button className="flex gap-2 items-center justify-between w-full" onClick={handleUserOptions}>
							<img src={user.profileImg} className="w-12 h-12 object-cover rounded-full" loading='lazy' alt='u' />
							<div className="flex flex-col items-start">
								<h3 className="font-bold">{user.fullName}</h3>
								<p className="text-slate-700">@{user.username}</p>
							</div>
							<div className="mr-2"><FiMoreHorizontal /></div>
						</button>
					</li>
					<div>
						<button onClick={handleLogOut}>{loading ? 'Loading...' : 'Logout'}</button>
					</div>
				</ul>
			</aside>
			<Modal isOpen={openComposeChirp} handleModalState={handleComposeChirp}>
				<ComposeChirpForm />
			</Modal>
		</>
	)
}