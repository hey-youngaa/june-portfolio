import React from 'react'
import './misc.css'
import OneCol from '../../components/imgGallery/OneCol'
import { miscWork } from '../../assets/data/Data'
import swimming from '../../assets/videos/swimming.mp4'
import move from '../../assets/videos/move.mp4'
import pizza from '../../assets/videos/pizza.mp4'
import track from '../../assets/videos/track.mp4'


function Misc() {
  return (
    <div className='pageContainer'>
        <video  src={swimming} muted autoPlay loop/>
        <OneCol gallery={miscWork} />
        <video src={move} muted autoPlay loop />
        <video src={track} muted autoPlay loop />
        <video src={pizza} muted autoPlay loop />
    </div>
  )
}

export default Misc