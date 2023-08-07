import React from 'react'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { sculptureWork } from '../../assets/data/Data'

function Sculpture() {
  return (
    <div>
      <ImgGallery gallery={sculptureWork} />
    </div>
  )
}

export default Sculpture