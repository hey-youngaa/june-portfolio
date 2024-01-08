import React from 'react'
import './painting.css'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { paintingWork } from '../../assets/data/Data'

function Painting() {
  return (
    <div className='pageContainer'>
      <div className="pageHeader">
        <div className="sectionTitle">Unruly Visions</div>
        <div className="sectionYear">(2020 - present)</div>
        <div className="sectionMatl">Mixed media on paper, fabric, wood</div>
      </div>
      <ImgGallery gallery={paintingWork} />
    </div>
  )
}

export default Painting