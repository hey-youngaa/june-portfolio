import React from 'react'
import './drawing.css'
import ImgGallery from '../../components/imgGallery/ImgGallery'
import { drawingWork } from '../../assets/data/Data'
import { drawingSeries } from '../../assets/data/Data'
import SeriesGallery from '../../components/seriesGallery/SeriesGallery'

function Drawing() {
  return (
    <div className='pageContainer'>
      <div className="pageHeader">
        <div className='sectionTitle'>Planetary Suburbs</div>
        <div className='sectionYear'>(2020 - present)</div>
        <div className="sectionMatl">Mixed media on paper</div>
      </div>
      <SeriesGallery series={drawingSeries} />
      <div className="break"></div>
      <ImgGallery gallery={drawingWork} />
    </div>
  )
}

export default Drawing