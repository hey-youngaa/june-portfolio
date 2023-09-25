import React,{useState} from 'react'
import './imggrid.css'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {IoClose} from 'react-icons/io5'

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
                <IoClose className='close' onClick={handleCloseModal} />
                    <FiChevronLeft className='previous' onClick={prevSlide} />
                    <img src={collection[slideNumber].image} alt='' className='modalImg' />
                    <div className="imgDesc">
                        <h3 className='imgTitle'>{collection[slideNumber].title}</h3>
                        <p>{collection[slideNumber].matl}</p>
                    </div>
                    <FiChevronRight className='next' onClick={nextSlide} />
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