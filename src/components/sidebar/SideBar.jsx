import React from 'react'
import { NavItems } from '../../assets/data/Data'
import { Link } from 'react-router-dom'
import './sidebar.css'
import { socialIcons } from '../../assets/data/Data'

function SideBar() {
  return (
    <div className="sideBarContainer">
        <div className="logoWrapper">
            <Link to='/' className='logo'>JUNE CHOI</Link>
        </div>
        <ul className='navItems'>
            {NavItems.map((item,index) => {
                return (
                    <li key={index} className='navItem'>
                        <Link className={item.cName} to={item.url}>
                            {item.title}
                        </Link>
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