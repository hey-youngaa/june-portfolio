import React from 'react'
import './painting.css'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { paintingWork } from '../../assets/data/Data'

function Painting() {
  return (
    <div className='pageContainer'>
      <div className="pageHeader">
        <h3>Unruly Visions (2020 - present)</h3>
        <p>Mixed media on paper, fabric, wood</p>
      </div>
      <ImgGallery gallery={paintingWork} />
    </div>
  )
}

export default Painting