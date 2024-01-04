import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import insta from '../../assets/images/insta.svg'
import './navbar.css'
import menu from '../../assets/images/menu.svg'
import down from '../../assets/images/down.svg'

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
    <nav className="navBarContainer">
        <NavLink to='/' className='logo' onClick={closeMobileMenu}> JUNE CHOI</NavLink>
        <div className="menuIcon" onClick={handleClick}>
            <img src={menu} alt="menu icon"/>
        </div>
        <div className={click ? 'navItems active' : 'navItems'} >
            <div className="dropdown">
                <button className="dropBtn">
                    GALLERY 
                    <img src={down} alt='dropdown menu' className='downArrow'/>
                </button>
                <div className="dropdownContent">
                    <NavLink to='/sculpture' className='dropLink' onClick={closeMobileMenu}>SCULPTURE</NavLink>
                    <NavLink to='/painting' className='dropLink' onClick={closeMobileMenu}>PAINTING</NavLink>
                    <NavLink to='/drawing' className='dropLink' onClick={closeMobileMenu}>DRAWING</NavLink>
                    <NavLink to='/misc' className='dropLink' onClick={closeMobileMenu}>MISC</NavLink>
                </div>
            </div>
            <NavLink to='/sketchbook' className='navItem' onClick={closeMobileMenu}>SKETCHBOOK</NavLink>
            <NavLink to='/visual-archive' className='navItem' onClick={closeMobileMenu}>VISUAL ARCHIVE</NavLink>
            <NavLink to='/about' className='navItem' onClick={closeMobileMenu}>ABOUT</NavLink>
            <a target='_blank' rel='noreferrer' href='http://www.instagram.com/hey.goma' id='instagram'>
                <img src={insta} alt='instagram'/>
            </a>
        </div>
    </nav>
  )
}

export default NavBar