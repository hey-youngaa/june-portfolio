import React from 'react'
import './misc.css'
import { miscWork } from '../../assets/data/Data'
import ImgSlider from '../../components/imgSlider/ImgSlider'


function Misc() {
  return (
    <div className='pageContainer'>
      <ImgSlider slides={miscWork} />
    </div>
  )
}

export default Misc