import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import './imggallery.css'

function TwoCol({gallery}) {
  return (
    <>
        <div className="masonryContainer">
            <ResponsiveMasonry columnsCountBreakPoints={{350:1}}>
                <Masonry gutter='80px'>
                    {gallery.map((item,index) => {
                        return(
                            <img 
                            key={index}
                            src={item.image}
                            alt={item.alt}
                            className='singleImg'
                            />
                        )
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    </>
  )
}

export default TwoCol