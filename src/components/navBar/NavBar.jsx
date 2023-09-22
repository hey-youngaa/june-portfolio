import React, {useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import DropDown from '../dropDown/DropDown'
import Menu from '../../assets/images/menu.svg'
import { socialIcons } from '../../assets/data/Data'
import { NavItems } from '../../assets/data/Data'

function NavBar() {
    const [click,setClick] = useState(false);
    const [dropdown, setDropDown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            setDropDown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropDown(false);
        } else{
            setDropDown(false);
        }
    };

  return (
    <>
        <nav className='navBarContainer'>
            <Link to='/'  className='logo' onClick={closeMobileMenu}>
                june choi 
            </Link>
            <div className="menuIcon" onClick={handleClick}>
                <img src={Menu} alt='menu bar' />
            </div>
            <ul className={click ? 'navMenu active' : 'navMenu'}>
                {NavItems.map((item) => {
                    if (item.title === 'gallery') {
                        return(
                            <li key={item.id} className={item.cName} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                <Link to={item.url} className='navLink' onClick={closeMobileMenu}>
                                <img src={item.icon} alt="icon" />
                                    {item.title}
                                </Link>
                                {dropdown && <DropDown />}
                            </li>
                        )
                    }

                    return (
                        <li key={item.id} className={item.cName}>
                            <Link to={item.url} className='navLink' onClick={closeMobileMenu}>
                            <img src={item.icon} alt="icon" />
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
                <div className="socials">
                {socialIcons.map((item,index) => {
                    return(
                        <li className={item.cName}>
                            <a target='_blank' rel='noreferrer' href={item.url} >
                                <img src={item.icon} alt={item.alt} />
                            </a>
                        </li>
                    )
                })}
            </div>
            </ul>
        </nav>
    </>
  )
}

export default NavBar