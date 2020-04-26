import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import fetch from 'isomorphic-fetch'

const Header = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const getMe = async() => {
            const res = await fetch('/api/me')
            const authUser = await res.json()
            // console.log(authUser)
            setUser(authUser)
        }
        getMe()
    }, [])
    return (
        <div>
            <div className="bg-red-300  py-4" >
                <img className="h-24 mx-auto" src="/logo.png" height="60" alt="logo fls"/>
            </div>
            <Navbar />
            {JSON.stringify(user)}
        </div>
    )
}

export default Header