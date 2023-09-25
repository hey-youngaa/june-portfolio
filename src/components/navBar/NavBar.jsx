import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
            <Link to='/' className='logo'> june choi</Link>
        </div>
        <div className="menuIcon" onClick={handleClick}>
            <img src={menu} alt="menu icon"/>
        </div>
        <div className='navItems' >
            <Link to='/about' className='navItem'>about</Link>
            <div className="dropdown">
                <button className="dropBtn">
                    gallery
                </button>
                <div className="dropdownContent">
                    <Link to='/sculpture' className='dropLink' onClick={closeMobileMenu}>sculpture</Link>
                    <Link to='/painting' className='dropLink' onClick={closeMobileMenu}>painting</Link>
                    <Link to='/drawing' className='dropLink' onClick={closeMobileMenu}>drawing</Link>
                    <Link to='/misc' className='dropLink' onClick={closeMobileMenu}>misc</Link>
                </div>
            </div>
            <Link to='/visual-archive' className='navItem'>visual archive</Link>
            <Link to='/sketchbook' className='navItem'>sketchbook</Link>
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