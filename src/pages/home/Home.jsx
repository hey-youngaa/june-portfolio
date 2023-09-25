import React from 'react'
import './home.css'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { sculptureWork } from '../../assets/data/Data'
import ImgGrid from '../../components/imgGrid/ImgGrid'
import { sculptureOne } from '../../assets/data/Data'


function Home() {
  return (
    <div className="pageContainer">
      <ImgGrid collection={sculptureOne} />
      <ImgGallery gallery={sculptureWork} />
    </div>
  )
}

export default Home