import React from 'react'
import { NavItems } from '../../assets/data/Data'
import { Link } from 'react-router-dom'
import './sidebar.css'

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
    </div>
  )
}

export default SideBar