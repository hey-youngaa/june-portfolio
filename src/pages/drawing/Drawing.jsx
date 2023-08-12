import React from 'react'
import './drawing.css'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { drawingWork } from '../../assets/data/Data'
import { drawingSeries } from '../../assets/data/Data'
import { Link } from 'react-router-dom'

function Drawing() {
  return (
    <div className='pageContainer'>
      <ImgGallery gallery={drawingWork} />
      <div className="seriesContainer">
        {drawingSeries.map((item) => {
          return(
            <Link to={`/drawing/${item.id}`}>
              <img src={item.img1} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Drawing