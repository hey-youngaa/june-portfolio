import React from 'react'
import './about.css'
import self from '../../assets/images/self.jpg'

function About() {
  return (
    <div className='pageContainer'>
      <div className="aboutContent">
      <div className="pfpWrapper">
          <img src={self} alt="self"/>
        </div>
        
        <div className="aboutInfoWrapper">
          <p>
            Based in Providence, Rhode Island
          </p>
        </div>
      </div>
    </div>
  )
}

export default About