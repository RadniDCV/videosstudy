import React from 'react'
import ReactPlayer from  'react-player/lazy'
import {Link} from 'react-router-dom'
import "./styles.css"

function Page04() {
  return (
    <div className='container-video'>
        <ReactPlayer className="video-conf" url='https://www.youtube.com/embed/LU6d4mF9qFA?si=1j-G9FSLLMlT6mEo' controls/>
        <Link to="/" >Gallery</Link>
    </div>
  )
}

export default Page04