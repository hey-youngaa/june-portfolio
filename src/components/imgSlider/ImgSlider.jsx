import React, {useState} from 'react'
import './imgslider.css'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'

function ImgSlider({slides}) {
  const [sliderData, setSliderData] = useState(slides[0]);
  const [val, setVal] = useState(0);
  const length = slides.length

  const handleClick = (index) => {
    const slider = slides[index]
    setSliderData(slider)
  }

  const nextSlide = () => {
    let index = val === length - 1 ?  0: val + 1;
    setVal(index);
    const slider = slides[index];
    setSliderData(slider);
  }

  const prevSlide = () => {
    let index = val === 0 ? length - 1 : val - 1;
    setVal(index);
    const slider = slides[index];
    setSliderData(slider)
  }

  return (
    <div className='slider'>
      <div className="mainRow">
        <img
          src={left}
          alt='left arrow'
          className='leftArrow'
          onClick={prevSlide}
        />
        <img src={sliderData.image} alt='' className='mainImg'/>
        <img
          src={right}
          alt='right arrow'
          className='rightArrow'
          onClick={nextSlide}
        />
      </div>
      <div className="titleRow">
        <h2>{sliderData.title}</h2>
      </div>
      <div className="thumbRow">
        {slides.map((item,i) => (
          <div className="thumbnail" key={i}>
            <img
            className={sliderData.id === i ? 'clicked' : ''}
              src={item.image}
              alt={item.alt}
              onClick={() => handleClick(i)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImgSlider