import React from 'react'
import './about.css'
import pain from '../../assets/images/pain.jpeg'
import { socialIcons } from '../../assets/data/Data'

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
            <br />
            <br />
            Click here for my resume.
          </p>
          <div className="socials">
            {socialIcons.map((item,index) => {
                return(
                    <li className={item.cName}>
                        <a target='_blank' rel='noreferrer' href={item.url} >
                            <img src={item.icon} alt={item.alt} />
                        </a>
                    </li>
                )
            })}
        </div>
        </div>
      </div>
    </div>
  )
}

export default About