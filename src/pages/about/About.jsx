import React from 'react'
import './about.css'
import bug from '../../assets/images/bug.png'


function About() {
  return (
    <div className='pageContainer'>
      <div className="aboutContent">
        <img src={bug} alt="self" className='aboutImg'/>

        <p className="aboutInfoWrapper">
          June Choi (b. 2001) is a visual artist currently studying at the Rhode Island School
          of Design. They predominantly work in painting, drawing, and sculpture, oftentimes
          thinking of ways to merge their applications into one. From an immigrant household
          in the temperate suburbs of Maryland, they developed an affinity for the landscape
          as an image that holds command over our ideas of personhood, origins, and material
          reality. Depictions of enclosed spaces and open skies come together to create
          picturesque scenes that begin to dissolve out of imagination as they erode at their
          edges. In reinvesting in the “natural” as a visual fallacy, they hope to meaningfully
          observe estrangement, idleness, and self-autonomy in an age where the marginalized
          find themselves existing like ghosts in plain sight.
          <br/>
          <br/>
          <a className='email' href='mailto:ju.choi168@gmail.com' target='_blank' rel='noreferrer'>ju.choi168@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default About