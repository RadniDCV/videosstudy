import React from "react";
import videosData from "../data/videos.json";
import {Link} from 'react-router-dom'
import './styles.css'

function ReactVideoGallery() {
  return (
    <div>
      <h1>Video Gallery</h1>
      <div className="gallery">
        {videosData.videos.map((video, index) => (
          <div key={index} className="video">
            <img src={video.image} alt={video.name} className="images"/>
            <Link to={video.link} >{video.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactVideoGallery;
