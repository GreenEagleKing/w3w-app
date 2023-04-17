import React from "react"
import topoBg from "../assets/topoBg.mp4"

function VideoBackground() {
  return (
    <div className="videoWrapper">
      <video src={topoBg} autoPlay loop muted />
    </div>
  )
}

export default VideoBackground
