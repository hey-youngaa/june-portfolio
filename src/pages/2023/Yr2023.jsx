import React from 'react'
import './yr2023.css'
import ImgSlider from '../../components/imgslider/ImgSlider'
import { GroundWater } from '../../assets/data/Data'

function Yr2023() {
  return (
    <div className='pageContainer'>
      <ImgSlider slides={GroundWater} />
    </div>
  )
}

export default Yr2023