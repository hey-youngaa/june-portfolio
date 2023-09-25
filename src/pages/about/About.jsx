import React from 'react'
import './about.css'
import pain from '../../assets/images/pain.jpeg'

function About() {
  return (
    <div className='pageContainer'>
      <div className="aboutContent">
        <div className="pfpWrapper">
          <img src={pain} alt="self"/>
        </div>
        
        <div className="aboutInfoWrapper">
          <p>
            Based in Providence, Rhode Island. Born and raised in the Maryland suburbs.
            <br />
            <br />
            For any questions or work inquiries, please email ju.choi168@gmail.com.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About