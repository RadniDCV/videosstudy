import React from 'react'
import ReactPlayer from  'react-player/lazy'
import {Link} from 'react-router-dom'

function Page06() {
  return (
    <div>
         <ReactPlayer url='https://www.youtube.com/embed/HNH-By1PNck?si=HmU5LSsJN5D8JcaT' controls/>
        <Link to="/" >Gallery</Link>
    </div>
  )
}

export default Page06