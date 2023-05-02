import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'

function RequireAuthLayout() {
    const location = useLocation()
    const { currentUser } = useAuthContext()
    return (
        currentUser ? <Outlet /> : <Navigate to='/' state={{from:location}} replace />
    )
}

export default RequireAuthLayout