import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './images/icon/Logo.svg'

const Header = () => {
  return (
    <div className='container d-flex align-items-center justify-content-between'>
        <div className='logo'>
           <img src={Logo} alt=' Little Lemon' />
        </div>
        <nav className='d-flex gap'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/menu'>Menu</NavLink>
          <NavLink to='/reservations'>Reservations</NavLink>
          <NavLink to='/order-online'>Order Online</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </nav>
    </div>
  )
}

export default Header
