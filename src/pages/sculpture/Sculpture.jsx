import React from 'react'
//import ImgGrid from '../../components/imgGrid/ImgGrid'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { sculptureWork } from '../../assets/data/Data'



function Sculpture() {
  return (
    <div className='pageContainer'>
      <div className="pageHeader">
        <div className='sectionTitle'>In Plain Sight</div>
        <div className="sectionYear">(2022 - present)</div>
        <div className="sectionMatl">Mixed media on cardboard, pulp, found wood</div>
      </div>
      <ImgGallery gallery={sculptureWork} />
    </div>
  )
}

export default Sculpture