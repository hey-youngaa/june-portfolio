import React from 'react'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { miscWork } from '../../assets/data/Data'

function Misc() {
  return (
    <div className='pageContainer'>
        <ImgGallery gallery={miscWork} />
    </div>
  )
}

export default Misc