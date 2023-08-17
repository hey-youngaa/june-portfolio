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
            Based in Providence, Rhode Island. Born and raised in the Maryland suburbs.
            <br />
            <br />
            For any questions or work inquiries, please email ju.choi168@gmail.com.
            <br />
            <br />
            Click here for my resume.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About