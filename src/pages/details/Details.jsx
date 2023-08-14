import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './details.css'
import { drawingSeries } from '../../assets/data/Data'

function Details() {
  let {id} = useParams()
  let [series, setSeries] = useState(null)

  useEffect(() => {
    let series = drawingSeries.find((series) => series.id === id)
    if (series) {
      setSeries(series)
    }
  }, [id])

  return (
    <div className='pageContainer'>
    {series ? (
      <div className="singleSeries">
        <h1>{series.title}</h1>
        <p> Some information on medium, measurements?</p>
        <div className="seriesImgs">
          <img  src={series.img1} alt={series.alt}/>
          <img  src={series.img2} alt={series.alt}/>
          <img  src={series.img3} alt={series.alt}/>
          <img  src={series.img4} alt={series.alt}/>
          <img  src={series.img5} alt={series.alt}/>
          <img  src={series.img6} alt={series.alt}/>
          <img  src={series.img7} alt={series.alt}/>
          <img  src={series.img8} alt={series.alt}/>
          <img  src={series.img9} alt={series.alt}/>
          <img  src={series.img10} alt={series.alt}/>
          <img  src={series.img11} alt={series.alt}/>
        </div>
      </div>
    ) : null}
    </div>
  )
}

export default Details