import React from 'react';
import MainNavbar from '../components/MainNavbar';



const Header = () => {
    return(
    <header className='header'>
        <div className="header__logo">
            <img src={HorLogo} alt='logo-utfsm'></img>
        </div>
        <MainNavbar />
    </header>
    )
};

export default Header;