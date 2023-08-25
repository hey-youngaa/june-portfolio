import React from 'react'
import './imgboard.css'

function ImgBoard({gallery}) {
  return (
    <>
        <div className="masonry">
            {gallery.map((item, index) => {
                return(
                    <img 
                        src={item.image}
                        alt={item.alt}
                        className='masonImg'
                    />
                )
            })}
        </div>
    </>
  )
}

export default ImgBoard