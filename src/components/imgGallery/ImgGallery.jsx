import React, {useState} from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import './imggallery.css'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {IoClose} from 'react-icons/io5'


function ImgGallery({gallery}) {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const length = gallery.length 

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
                <FiChevronLeft className='previous' onClick={prevSlide}  />
                <img src={gallery[slideNumber].image} alt='' className='modalImg' />
                <h3 className='imgTitle'>{gallery[slideNumber].title}</h3>
                <FiChevronRight className='next' onClick={nextSlide} />
            </div>
        }
        <div className='masonryContainer'>
            <ResponsiveMasonry columnsCountBreakPoints={{350:1, 750:2, 900:3}} >
                <Masonry gutter='80px'>
                    {gallery.map((item,index) => {
                        return(
                            <img 
                                key={index}
                                src={item.image}
                                alt={item.alt}
                                className='singleImg'
                                onClick={() => handleOpenModal(index)}
                            />
                        )
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    </>
  )
}

export default ImgGallery