import React from 'react'
import ReactPlayer from  'react-player/lazy'
import {Link} from 'react-router-dom'
import "./styles.css"

function Page02() {
  return (
    <div className='container-video'>
        <ReactPlayer className="video-conf" url='https://www.youtube.com/embed/mBj-0zq8noM?si=jNXe5GRY8yoy5rc4' controls/>
        <Link to="/" >Gallery</Link>
    </div>
  )
}

export default Page02