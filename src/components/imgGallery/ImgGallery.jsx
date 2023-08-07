import React from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import './imggallery.css'

function ImgGallery({gallery}) {
  return (
    <div className='masonryContainer'>
        <ResponsiveMasonry columnsCountBreakPoints={{350:1, 750:2, 900:3}} >
            <Masonry gutter='80px'>
                {gallery.map((item,index) => {
                    return(
                        <img key={index} src={item.image} alt={item.alt} />
                    )
                })}
            </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}

export default ImgGallery