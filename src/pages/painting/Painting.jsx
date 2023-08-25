import React from 'react'
import './painting.css'
//import ImgGallery from '../../components/imgGallery/ImgGallery'
import { paintingWork } from '../../assets/data/Data'
import ImgBoard from '../../components/imgBoard/ImgBoard'

function Painting() {
  return (
    <div className='pageContainer'>
      <ImgBoard gallery={paintingWork} />
    </div>
  )
}

export default Painting