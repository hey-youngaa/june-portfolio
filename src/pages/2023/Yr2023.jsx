import React from 'react'
import ImgSlider from '../../components/imgslider/ImgSlider'
import { GroundWater } from '../../assets/data/Data'

function Yr2023() {
  return (
    <div className='pageContainer'>
      <div className="seriesContainer">
        <ImgSlider slides={GroundWater} />
      </div>
    </div>
  )
}

export default Yr2023