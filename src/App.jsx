import './index.css'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import Messages from './pages/Messages'
import Explore from './pages/Explore'
import Bookmarks from './pages/Bookmarks'
import SingleChirpPage from './pages/SingleChirpPage'
import MainPage from './pages/MainPage'
import SignUp from './pages/SignUp'
import SignUpProvider from './context/SignUpUserContext'
import ContextLayout from './Layouts/ContextLayout'
import AuthProvider from './context/AuthContext'
import RequireAuthLayout from './layouts/RequireAuthLayout'
import ChirpProvider from './context/ChirpContext'

export const user = {
	fullName: "Nico Robin",
	username: "nicorobin",
	headerImg: "https://cdn.pixabay.com/photo/2017/10/03/17/53/nature-2813487__340.jpg",
	profileImg: "https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664__340.jpg",
	followers: 9,
	following: 9
}

export default function App() {
	return (
		<Routes>
			<Route element={<ContextLayout provider={SignUpProvider} />}>
				<Route path='/' element={<MainPage />} />
				<Route path='/signup' element={<SignUp />} />
			</Route>
			<Route element={<ContextLayout provider={AuthProvider} />}>
				<Route element={<RequireAuthLayout />}>
					<Route element={<ContextLayout provider={ChirpProvider} />}>
						<Route element={<MainLayout />}>
							<Route path='/home' element={<Home />} />
							<Route path='/explore' element={<Explore />} />
							<Route path='/notifications' element={<Notifications />} />
							<Route path='/profile' element={<Profile />} />
							<Route path='/bookmarks' element={<Bookmarks />} />
							<Route path='/:username/status/:chirpId' element={<SingleChirpPage />} />
						</Route>
					</Route>
					<Route path='/messages' element={<Messages />} />
				</Route>
			</Route>
		</Routes>
	)
}
