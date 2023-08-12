import React, {useState} from 'react'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import './imgslider.css'

function ImgSlider({slides}) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  
  return (
    <section className='slider'>
      <FiChevronLeft className='leftArrow' onClick={prevSlide} />
      <FiChevronRight className='rightArrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <div className="sliderImgWrapper">
                <img src={slide.image} alt={slide.alt} className='sliderImg'/>
              </div>
            )}
          </div>
        )
      })}
    </section>
  )
}

export default ImgSlider