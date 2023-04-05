import React from 'react'

const YoutubeVideo = ({videoId}) => {
  return (
    <iframe
        width="320"
        height="180"
        src={`https://youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    ></iframe>
  )
}

export default YoutubeVideo