import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import { Link } from 'react-router-dom'
import './seriesgallery.css'
function SeriesGallery({series}) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900:3}}>
        <Masonry gutter='2em'>
        {series.map((item) => {
          return(
            <Link to={`/drawing/${item.id}`}>
              <div className="seriesWrapper">
                <img src={item.cover}  alt={item.alt}/>
                <div className="titleWrapper">
                  <h2 className='seriesTitle'>{item.title}</h2>
                </div>
              </div>
            </Link>
          )
        })}
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default SeriesGallery