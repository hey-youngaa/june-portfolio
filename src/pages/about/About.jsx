import React from 'react'
import './about.css'
import Self from '../../assets/images/Self.jpg'
function About() {
  return (
    <div className='pageContainer'>
      <div className="aboutContent">
        <div className="aboutInfoWrapper">
          <p>
            Based in Providence, Rhode Island
          </p>
        </div>
        <div className="pfpWrapper">
          <img src={Self} alt="self"/>
        </div>
      </div>
    </div>
  )
}

export default About