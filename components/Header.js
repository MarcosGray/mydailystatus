import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div>
            <div className="bg-red-300  py-4" >
                <img className="h-24 mx-auto" src="/logo.png" height="60" alt="logo fls"/>
            </div>
            <Navbar />
        </div>
    )
}

export default Header