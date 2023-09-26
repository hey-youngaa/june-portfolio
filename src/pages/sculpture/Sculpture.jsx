import React from 'react'
import ImgGrid from '../../components/imgGrid/ImgGrid'
import { sculptureWork } from '../../assets/data/Data'



function Sculpture() {
  return (
    <div className='pageContainer'>
      <div className="pageHeader">
        <h3>In Plain Sight (2022 - present)</h3>
        <p>mixed media on cardboard, pulp, found wood</p>
      </div>
      <ImgGrid collection={sculptureWork} />
    </div>
  )
}

export default Sculpture