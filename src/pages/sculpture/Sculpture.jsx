import React from 'react'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import OneCol from '../../components/oneCol/OneCol'
import { sculptureWork } from '../../assets/data/Data'
import { sculptureOne } from '../../assets/data/Data'


function Sculpture() {
  return (
    <div className='pageContainer'>
      <div className="pageHeader">
        <h3>In Plain Sight (2022 - present)</h3>
        <p>mixed media on cardboard, pulp, found wood</p>
      </div>
      <OneCol gallery={sculptureOne} />
      <ImgGallery gallery={sculptureWork} />
    </div>
  )
}

export default Sculpture