import React from 'react'
import './home.css'
import Bunnies from '../../assets/videos/RunningBunnies.gif'

function Home() {
  return (
    <div className='pageContainer'>
      <div className="heroWrapper">
        <img src={Bunnies} alt='Running Bunnies' />
      </div>
    </div>
  )
}

export default Home