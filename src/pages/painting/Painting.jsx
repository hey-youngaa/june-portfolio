import React from 'react'
import './painting.css'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { paintingWork } from '../../assets/data/Data'


function Painting() {
  return (
    <div>
      <ImgGallery gallery={paintingWork} />
    </div>
  )
}

export default Painting