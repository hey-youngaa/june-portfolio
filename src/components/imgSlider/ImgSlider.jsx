import React, {useState} from 'react'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'
import './imgslider.css'

function ImgSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length= slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

  return (
    <div className="slider">
        <img src={left} alt='left arrow' className='leftArrow' onClick={prevSlide} />
        <img src={right} alt='right arrow' className='rightArrow' onClick={nextSlide} />
        {slides.map((item,index) => (
            <div className={index === current ? 'slide active' : 'slide'} key={index} >
                {index === current && (
                    <div className="mainSlide">
                        <div>
                            <img src={item.image} alt={item.alt} className='mainImg' />
                        </div>
                        <div>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                )}
            </div>
        ))}
    </div>
  )
}

export default ImgSlider