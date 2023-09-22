import React from 'react'
//import { useLocation } from 'react-router-dom'
import { NavItems } from '../../assets/data/Data'
import { NavLink } from 'react-router-dom'
import './sidebar.css'

function SideBar() {

    return (
    <div className="sideBarContainer">
        <div className="logoWrapper">
            <NavLink to='/' className='logo'>june choi</NavLink>
        </div>
        <ul className='navItems'>
            {NavItems.map((item,index) => {
                return (
                    <li key={index} className='navItem'>
                        <NavLink to={item.url} className='navLinks' >
                            {item.title}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default SideBar