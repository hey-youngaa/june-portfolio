import React,{useState} from 'react'
import './imggrid.css'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'
import close from '../../assets/images/close.png'

function ImgGrid({collection}) {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const length = collection.length 

  const handleOpenModal = (index) => {
      setSlideNumber(index)
      setOpenModal(true)
  }

  const handleCloseModal = () => {
      setOpenModal(false)
  }

  const prevSlide = () => {
      setSlideNumber( slideNumber === 0 ? length - 1 : slideNumber - 1)
  }
  
  const nextSlide = () => {
     setSlideNumber( slideNumber === length - 1 ? 0 : slideNumber + 1)
  }

  return (
    <>
      {openModal &&
            <div className='modalContainer'>
                <img src={close} alt='exit icon' className='close' onClick={handleCloseModal} />
                    <img src={left} alt='left arrow' className='previous' onClick={prevSlide} />
                    <img src={collection[slideNumber].image} alt='' className='modalImg' />
                    <div className="imgDesc">
                        <h3 className='imgTitle'>{collection[slideNumber].title}</h3>
                        <p>{collection[slideNumber].matl}</p>
                    </div>
                    <img src={right} alt='right arrow' className='next' onClick={nextSlide} />
            </div>
        }
      <div className="gridContainer">
        {collection.map((item,index) => {
            return(
                <div className="gridItem">
                    <img
                      src={item.image}
                      alt={item.alt}
                      onClick={() => handleOpenModal(index)}
                    />
                </div>
            )
        })}
      </div>
    </>
  )
}

export default ImgGrid