import React from 'react';
import YouTube from 'react-youtube';
 
class Video extends React.Component {
  render() {
    const opts = {
      height: '300',
      width: '400',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
 
    return <div className="hola"><YouTube videoId="Uk5vtoG5ajQ" opts={opts} onReady={this._onReady} />;</div>
  }
 
  _onReady(event) {
   // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Video;
