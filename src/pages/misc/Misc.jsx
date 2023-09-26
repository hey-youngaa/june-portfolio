import React from 'react'
import './misc.css'
//import OneCol from '../../components/oneCol/OneCol'
import { miscWork } from '../../assets/data/Data'
import ImageGallery from "react-image-gallery"
//import swimming from '../../assets/videos/swimming.mp4'
import "react-image-gallery/styles/css/image-gallery.css";

function Misc() {
  return (
    <ImageGallery items={miscWork} />
  )
}

export default Misc