import React, { useEffect } from 'react'
import './adminHome.css'
import { Outlet, useNavigate } from 'react-router-dom'

function AdminHome() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (!token) {
            navigate('/login')
        }
    }, [navigate])

    return (
        <>
            <div className="sidebar">
                <a href="/admin">Home</a>
                <a href="/admin/user">User</a>
                <a href="/admin/data">Data</a>
                <a href="/login" onClick={() => localStorage.clear()}>Logout</a>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </>
    )
}

export default AdminHome