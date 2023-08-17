import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './details.css'
import { drawingSeries } from '../../assets/data/Data'
import ImgGrid from '../../components/imgGrid/ImgGrid'

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
        <p> {series.text}</p>
        <ImgGrid collection={series.imgs} />
      </div>
    ) : null}
    </div>
  )
}

export default Details