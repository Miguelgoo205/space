import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav'>
        <ul className='list'>
            <Link className="anchor" to="/LogIn" >Iniciar Sesion</Link>
            <Link className="anchor" to="/CreateAccount" >Crear Cuenta</Link>
        </ul>
    </nav>
  )
}