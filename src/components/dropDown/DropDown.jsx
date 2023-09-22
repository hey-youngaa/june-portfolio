import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DropMenuItems } from '../../assets/data/Data'
import './dropdown.css'

function DropDown() {
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <>
        <ul 
            onClick={handleClick}
            className={click ? 'dropDownMenu clicked' : 'dropDownMenu'}
        >
            {DropMenuItems.map((item,index) => {
                return(
                    <li key={index}>
                        <Link
                            className={item.cName}
                            to={item.url}
                            onClick={() => setClick(false)}
                        >
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default DropDown