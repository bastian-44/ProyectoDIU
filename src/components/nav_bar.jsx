import React from 'react';
import { NavLink } from 'react-router-dom';
import HorLogo from '../assets/horizontal-logo.png';

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <img src={HorLogo} alt='logo-utfsm'/>
      <NavLink
        className={navLinkClass}
        to='/'
      >
        Inicio
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/lightbulb'
      >
        Ampolleta
      </NavLink>
    </nav>
  )
};
 
export default NavBar;
