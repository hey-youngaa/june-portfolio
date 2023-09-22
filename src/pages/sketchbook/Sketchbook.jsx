import React from 'react'
import { sketchbookWork } from '../../assets/data/Data'
import ImgGallery from '../../components/imgGallery/ImgGallery'

function Sketchbook() {
  return (
    <div className="pageContainer">
        <ImgGallery  gallery={sketchbookWork}/>
    </div>
  )
}

export default Sketchbook