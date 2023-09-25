import React from 'react'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { archive } from '../../assets/data/Data'

function VisualArchive() {
  return (
    <div className="pageContainer">
        <ImgGallery gallery={archive} />
    </div>
  )
}

export default VisualArchive