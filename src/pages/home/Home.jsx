import React from 'react'
import './home.css'
import swim from '../../assets/videos/swim.mp4'

function Home() {
  return (
    <div className="homePage">
      <video src={swim} muted autoPlay loop />
    </div>
  )
}

export default Home