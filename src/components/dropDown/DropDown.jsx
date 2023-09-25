import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DropMenuItems } from '../../assets/data/Data'
import './dropdown.css'

function DropDown() {
    const [dropdown, setDropdown] = useState(false)

  return (
    <>
        <section className='dropSection'>
            <ul 
                className={dropdown ? "dropDownMenu clicked" : "dropDownMenu"}
                onClick={() => setDropdown(!dropdown)}
            >
                {DropMenuItems.map((item,index) => {
                    return(
                        <li key={index}>
                            <Link
                                className={item.cName}
                                to={item.url}
                                onClick={() => setDropdown(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    </>
  )
}

export default DropDown