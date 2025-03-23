import React from 'react'
import './Video.css'
import video from '../assets/images/Video.png'

const Video = () => {
  return (
    <div className='video'>
        <img src={video} alt="video" />
    </div>
  )
}

export default Video