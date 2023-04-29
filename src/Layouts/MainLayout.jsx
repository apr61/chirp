import {Outlet} from 'react-router-dom'
import SideNavbar from '../components/SideNavbar'
import SideSuggestions from '../components/SideSuggestions'

function MainLayout(){
  return(
    <main className="max-w-5xl mx-auto flex min-h-screen">
      <SideNavbar />
      <div className="flex-1 border-x border-slate-300 relative">
        <Outlet />
      </div>
      <SideSuggestions />
    </main>
  )
}

export default MainLayout