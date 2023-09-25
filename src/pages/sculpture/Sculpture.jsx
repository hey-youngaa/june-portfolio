import React from 'react'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { sculptureWork } from '../../assets/data/Data'

function Sculpture() {
  return (
    <div className='pageContainer'>
      <ImgGallery gallery={sculptureWork} />
    </div>
  )
}

export default Sculpture