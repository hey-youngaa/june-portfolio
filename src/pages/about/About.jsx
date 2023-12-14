import React from 'react'
import './about.css'
import bug from '../../assets/images/bug.png'


function About() {
  return (
    <div className='pageContainer'>
      <div className="aboutContent">
        <div className="pfpWrapper">
          <img src={bug} alt="self"/>
        </div>
        
        <div className="aboutInfoWrapper">
          <p>
            Based in Providence, Rhode Island. Born and raised in the Maryland suburbs.
            <br />
            <br />
            For any questions or work inquiries, please email <a className='email' href='mailto:ju.choi168@gmail.com' target='_blank' rel='noreferrer'>ju.choi168@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About