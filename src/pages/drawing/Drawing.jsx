import React from 'react'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { GroundWater } from '../../assets/data/Data'
import { drawingWork } from '../../assets/data/Data'


function Drawing() {
  return (
    <div>
      <ImgGallery gallery={drawingWork} />
      <ImgGallery gallery={GroundWater} />
    </div>
  )
}

export default Drawing