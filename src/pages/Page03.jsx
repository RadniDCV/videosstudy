import React from 'react'
import ReactPlayer from  'react-player/lazy'
import {Link} from 'react-router-dom'
import "./styles.css"

function Page03() {
  return (
    <div className='container-video'>
        <ReactPlayer  className="video-conf" url='https://www.youtube.com/embed/B4TgFIn3DNY?si=OU3-AoqGplu-NF3G' controls/>
        <Link to="/" >Gallery</Link>
    </div>
  )
}

export default Page03