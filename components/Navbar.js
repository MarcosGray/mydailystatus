import React from 'react'
import Link from 'next/link'
import { useAuth } from '../lib/AuthContext'

const Navlink = ({ href, children }) => {
    return(
        <Link href={href}>
            <a className="p-2 hover:bg-red-700 rounded" >{children}</a>
        </Link>
    )
}


const Navbar = () => {
    const auth = useAuth()
    return (
        <div className="bg-red-900 text-gray-100 font-semibold py-4 text-center ">
            <Navlink href={'/sobre'} >Sobre</Navlink>
            { auth.isAuth && <Navlink href={'/cadastro'} >Cadastro</Navlink>}
            { auth.isAuth && <Navlink href={'/app'} >Ver Status</Navlink>}
            { !auth.isAuth && <Navlink href={'/'} >Entrar</Navlink>}
            { auth.isAuth && <Navlink href={'/api/logout'} >Logout</Navlink>}
        </div>
    )
}

export default Navbar