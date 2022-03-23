import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Login.css'
import Profile from './Profile'



export default function Logout() {
    const {logout, currentUser} = useAuth();


    async function handleAuth(){
        await logout();
    }

    return (
        <>
        {currentUser &&
        <div className="logout text-center p-3 bg-black text-white">
            <Profile />
            <button onClick={() => handleAuth()} className="btn btn-light" href="/">Logout</button>
        </div>
        }
        </>
    )
}
