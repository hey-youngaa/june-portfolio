import React from 'react'
import './home.css'
import homepage from '../../assets/images/homepage.png'

function Home() {
  return (
    <div className="pageContainer">
      <div className="heroImgWrapper">
        <img src={homepage} alt="elephant in the snake" />
      </div>
    </div>
  )
}

export default Home