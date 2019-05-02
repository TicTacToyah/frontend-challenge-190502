import React from 'react'
import Amplitude from 'amplitudejs'
import './StationCSS.css'

export default function Stations({ stations }) {
  console.log(stations)
  console.log(JSON.stringify(stations))

  const streams = stations.streamUrls

  const streamUrl = { ...streams }

  const song = {
    name: stations.name,
    url: streamUrl.streamUrl,
    live: true,
  }

  console.log(song)

  Amplitude.init({
    name: 'station.name',
    url: 'station.streamURLs[0]',
  })

  return (
    <React.Fragment>
      <div id="single-song-player">
        <img
          amplitude-song-info="cover_art_url"
          amplitude-main-song-info="true"
          alt=""
        />
      </div>
      <div className="bottom-container">
        <progress
          className="amplitude-song-played-progress"
          amplitude-main-song-played-progress="true"
          id="song-played-progress"
        />
      </div>
      <div className="time-container">
        <span className="current-time">
          <span
            className="amplitude-current-minutes"
            amplitude-main-current-minutes="true"
          />
          :
          <span
            className="amplitude-current-seconds"
            amplitude-main-current-seconds="true"
          />
        </span>
        <span className="duration">
          <span
            className="amplitude-duration-minutes"
            amplitude-main-duration-minutes="true"
          />
          :
          <span
            className="amplitude-duration-seconds"
            amplitude-main-duration-seconds="true"
          />
        </span>
      </div>
      <div className="control-container">
        <div
          className="amplitude-play-pause"
          amplitude-main-play-pause="true"
          id="play-pause"
        />
      </div>
      <div className="meta-container">
        <span
          amplitude-song-info="name"
          amplitude-main-song-info="true"
          className="song-name"
        />
        <span amplitude-song-info="artist" amplitude-main-song-info="true" />
      </div>
    </React.Fragment>
  )
}
