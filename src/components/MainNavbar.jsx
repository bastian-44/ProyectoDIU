import React from 'react';
import HorLogo from '../assets/horizontal-logo.png';
import { NavLink } from 'react-router-dom';

export const MainNavbar = () => {
    const MainNavLinkClass = ({ isActive }) => {
        const classes = ['main-navbar__link']
        if (isActive) classes.push('main-navbar__link--active')
        return classes.join(' ')
    }
    return (
    <nav className="main-navbar">
        <img src={HorLogo} className='main-navbar__logo' alt='logo-utfsm'></img>
        <NavLink
         to="/" className={MainNavLinkClass}>Página de Inicio</NavLink>
    </nav>
    )
};

export default MainNavbar;