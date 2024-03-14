import React from 'react'
import ReactPlayer from  'react-player/lazy'
import {Link} from 'react-router-dom'

function Page02() {
  return (
    <div>
        <ReactPlayer url='https://www.youtube.com/embed/mBj-0zq8noM?si=jNXe5GRY8yoy5rc4' controls/>
        <Link to="/" >Gallery</Link>
    </div>
  )
}

export default Page02