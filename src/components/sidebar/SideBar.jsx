import React from 'react'
import { NavItems } from '../../assets/data/Data'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
import { socialIcons } from '../../assets/data/Data'

function SideBar() {
  return (
    <div className="sideBarContainer">
        <div className="logoWrapper">
            <NavLink to='/' className='logo'>JUNE CHOI</NavLink>
        </div>
        <ul className='navItems'>
            {NavItems.map((item,index) => {
                return (
                    <li key={index} className='navItem'>
                        <NavLink to={item.url} className={item.cName} >
                            {item.title}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
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
    </div>
  )
}

export default SideBar