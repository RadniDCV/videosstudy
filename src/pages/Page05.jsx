import React from 'react'
import ReactPlayer from  'react-player/lazy'
import {Link} from 'react-router-dom'
import "./styles.css"

function Page05() {
  return (
    <div className='container-video'>
        <ReactPlayer className="video-conf" url='https://www.youtube.com/embed/R6MNlWagZhk?si=Vqc5SjtvqEOgmHw5' controls/>
        <Link to="/" >Gallery</Link>
    </div>
  )
}

export default Page05