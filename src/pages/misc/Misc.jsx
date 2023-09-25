import React from 'react'
import './misc.css'
import OneCol from '../../components/oneCol/OneCol'
import { miscWork } from '../../assets/data/Data'
//import swimming from '../../assets/videos/swimming.mp4'

function Misc() {
  return (
    <div className='pageContainer'>
        <OneCol gallery={miscWork} />
    </div>
  )
}

export default Misc