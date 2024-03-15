import React from 'react'
import ReactPlayer from  'react-player/lazy'
import {Link} from 'react-router-dom'
import "./styles.css"

function Page06() {
  return (
    <div className='container-video'>
         <ReactPlayer className="video-conf" url='https://www.youtube.com/embed/HNH-By1PNck?si=HmU5LSsJN5D8JcaT' controls/>
        <Link to="/" >Gallery</Link>
    </div>
  )
}

export default Page06