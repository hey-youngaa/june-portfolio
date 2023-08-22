import React from 'react'
import './home.css'
import homeVid from '../../assets/videos/homevid.mp4'

function Home() {
  return (
    <div className="homePage">
      <video src={homeVid} muted autoPlay loop />
    </div>
  )
}

export default Home