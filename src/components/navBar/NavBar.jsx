import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import insta from '../../assets/images/insta.svg'
import './navbar.css'
import menu from '../../assets/images/menu.svg'

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
    <nav className="navBarContainer">
        <div className="logoWrapper">
            <NavLink to='/' className='logo' onClick={closeMobileMenu}> june choi</NavLink>
        </div>
        <div className="menuIcon" onClick={handleClick}>
            <img src={menu} alt="menu icon"/>
        </div>
        <div className={click ? 'navItems active' : 'navItems'} >
            <NavLink to='/about' className='navItem'>about</NavLink>
            <div className="dropdown">
                <button className="dropBtn">
                    gallery
                </button>
                <div className="dropdownContent">
                    <NavLink to='/sculpture' className='dropLink' onClick={closeMobileMenu}>sculpture</NavLink>
                    <NavLink to='/painting' className='dropLink' onClick={closeMobileMenu}>painting</NavLink>
                    <NavLink to='/drawing' className='dropLink' onClick={closeMobileMenu}>drawing</NavLink>
                    <NavLink to='/misc' className='dropLink' onClick={closeMobileMenu}>misc</NavLink>
                </div>
            </div>
            <NavLink to='/visual-archive' className='navItem'>visual archive</NavLink>
            <NavLink to='/sketchbook' className='navItem'>sketchbook</NavLink>
            <div className="social">
                <a target='_blank' rel='noreferrer' href='http://www.instagram.com/hey.goma'>
                    <img src={insta} alt='instagram'/>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar