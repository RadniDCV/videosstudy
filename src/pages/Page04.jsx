import React from 'react'
import ReactPlayer from  'react-player/lazy'
import {Link} from 'react-router-dom'

function Page04() {
  return (
    <div>
        <ReactPlayer url='https://www.youtube.com/embed/LU6d4mF9qFA?si=1j-G9FSLLMlT6mEo' controls/>
        <Link to="/" >Gallery</Link>
    </div>
  )
}

export default Page04