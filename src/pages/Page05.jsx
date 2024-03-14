import React from 'react'
import ReactPlayer from  'react-player/lazy'
import {Link} from 'react-router-dom'

function Page05() {
  return (
    <div>
        <ReactPlayer url='https://www.youtube.com/embed/R6MNlWagZhk?si=Vqc5SjtvqEOgmHw5' controls/>
        <Link to="/" >Gallery</Link>
    </div>
  )
}

export default Page05