import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <div className='nav-left'>
        <NavLink
          className={navLinkClass}
          to='/'
        >
          Home
        </NavLink>
      </div>

      <div className='nav-center'>
         <h1>Materia</h1>
      </div>

      <div className='nav-right'>
        <NavLink

          className={navLinkClass}
          to='/lightbulb'
        >
          Ampolleta
        </NavLink>
      </div>

    </nav>
  )
}
 
export default NavBar
