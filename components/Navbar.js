import React from 'react'
import Link from 'next/link'

const Navlink = ({ href, children }) => {
    return(
        <Link href={href}>
            <a className="p-2 hover:bg-red-700 rounded" >{children}</a>
        </Link>
    )
}


const Navbar = () => {
    return (
        <div className="bg-red-900 text-gray-100 font-semibold py-4 text-center ">
            <Navlink href={'/sobre'} >Sobre</Navlink>
            <Navlink href={'/cadastro'} >Cadastro</Navlink>
            <Navlink href={'/entrar'} >Entrar</Navlink>
        </div>
    )
}

export default Navbar