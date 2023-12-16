import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './details.css'
import { drawingSeries } from '../../assets/data/Data'
import ImgGallery from '../../components/imgGallery/ImgGallery'


function Details() {
  let {id} = useParams();
  let [series, setSeries] = useState(null);


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
        <div className="seriesDesc">
          <h1>{series.titleWithoutYear}</h1>
          <h3>{series.year}</h3>
          <h3>{series.matl}</h3>
          <br />
          <p> {series.text}</p>
        </div>
        <ImgGallery gallery={series.imgs} />
        <p>{series.text2}</p>
        <ImgGallery gallery={series.imgs2} />
      </div>
    ) : null}
    </div>
  )
}

export default Details