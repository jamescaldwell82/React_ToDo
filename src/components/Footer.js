import React from 'react'
import Logout from './Auth/Logout'

export default function Footer() {
    return (
        <>
        <Logout />
        <footer className="bg-warning p-2 text-dark">
            <p>&copy; {new Date().getFullYear()} | James Caldwell</p>
        </footer>
        </>
    )
}
