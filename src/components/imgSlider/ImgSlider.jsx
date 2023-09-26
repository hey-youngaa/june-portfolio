import React,{useState} from 'react'
import './imgslider.css'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'


function ImgSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent( current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent( current === 0 ? length - 1 : current - 1);
    };

    if (Array.isArray(slides) || slides.length <= 0){
        return null;
    }

  return (
    <div className="slider">
        <img src={left} className='leftArrow' alt='left arrow' onClick={prevSlide} />
        <img src={right} className='rightArrow' alt='right arrow' onClick={nextSlide} />
        {slides.map((slide, index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <img src={slide.image} alt={slide.alt} className='slideImg' />
                    )}
                </div>
            )
        })}
    </div>
  )
}

export default ImgSlider