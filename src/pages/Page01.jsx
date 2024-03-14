import React from 'react'
import ReactPlayer from  'react-player/lazy'
import {Link} from 'react-router-dom'

function Page01() {
  return (
    <div>
        <ReactPlayer url='https://www.youtube.com/embed/-Zk7Y-8mf6Q?si=5thSZ9ppJjVri_f8' controls/>
        <Link to="/" >Gallery</Link>
    </div>
  )
}

export default Page01