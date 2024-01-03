import React from 'react'
import copyright from '../../assets/images/copyright.svg'
import './copyright.css'
function Copyright() {
  return (
    <div id='copyrightSection'>
        <img src={copyright} alt='copyright symbol' id='copyright' />
        2023 by June Choi
    </div>
  )
}

export default Copyright