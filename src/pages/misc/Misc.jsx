import React from 'react'
import './misc.css'
//import ImgGallery from '../../components/imgGallery/ImgGallery'
import TwoCol from '../../components/imgGallery/TwoCol'
import { miscWork } from '../../assets/data/Data'
import swimming from '../../assets/videos/swimming.mp4'
import move from '../../assets/videos/move.mp4'

function Misc() {
  return (
    <div className='pageContainer'>
        <video  src={swimming} muted autoPlay loop/>
        <TwoCol gallery={miscWork} />
        <video src={move} muted autoPlay loop />
    </div>
  )
}

export default Misc