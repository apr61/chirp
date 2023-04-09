import React from 'react'
import SideBarMenu from '../components/sidebar-menu/SideBarMenu'
import SideBarSuggestions from '../components/sidebar-suggestions/SideBarSuggestions'
import { Outlet } from 'react-router-dom'

function MainPageLayout() {
  return (
    <div className="mainPageLayout">
      <SideBarMenu />
      <div className="mainPageLayout__container">
        <Outlet />
      </div>
      <SideBarSuggestions />
    </div>
  )
}

export default MainPageLayout