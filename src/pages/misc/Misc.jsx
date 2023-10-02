import React from 'react'
import './misc.css'
import { miscWork } from '../../assets/data/Data'
import ImgSlider from '../../components/imgSlider/ImgSlider'


function Misc() {
  return (
    <div>
      <ImgSlider slides={miscWork} />
    </div>
  )
}

export default Misc