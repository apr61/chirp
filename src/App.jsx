import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Notifications from './pages/notifications/Notifications'
import Messages from './pages/messages/Messages'
import Profile from './pages/profile/Profile'
import Bookmarks from './pages/bookmarks/Bookmarks'
import MainPageLayout from './layouts/MainPageLayout'
import SingleChirpPage from './pages/singleChirpPage/SingleChirpPage'

function App() {
  return (
    <Routes>
      <Route element={<MainPageLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/bookmarks' element={<Bookmarks />} />
        <Route path='/:username/status/:postid' element={<SingleChirpPage />} />
      </Route>
      <Route path='/messages' element={<Messages />} />
    </Routes>
  )
}

export default App