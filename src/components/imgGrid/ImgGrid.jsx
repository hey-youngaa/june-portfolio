import React from 'react'
import './imggrid.css'

function ImgGrid({collection}) {
  return (
    <div className="gridContainer">
        {collection.map((item) => {
            return(
                <div className="gridItem">
                    <img src={item.image} alt={item.alt} />
                </div>
            )
        })}
    </div>
  )
}

export default ImgGrid