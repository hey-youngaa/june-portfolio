import React from 'react'
import './home.css'
import ImgGrid from '../../components/imgGrid/ImgGrid'
import { sculptureWork } from '../../assets/data/Data'


function Home() {
  return (
    <div className="pageContainer">
      <ImgGrid collection={sculptureWork} />
    </div>
  )
}

export default Home