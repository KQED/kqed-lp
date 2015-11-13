import ReactPlayer from 'react-player';
import React from 'react';
import AddToPlaylist from './add';
import ModalDonate from './modalDonate';
import ModalShare from './modalShare';

export default class Audio extends React.Component {
  constructor(props) {
    super(props);
    //these props are used for the audio player
    this.state = {
      url: this.props.audioUrl,
      playing: true,
      played: 0,
      seeking: false,
      loaded: 0,
      volume: 0
    };
    this.playPause = this.playPause.bind(this);
    this.onProgress = this.onProgress.bind(this);
    //these functions are for the audio scrub bar
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
  }
  playPause() { 
      this.setState({ playing: !this.state.playing });
  }
  onSeekMouseDown(e) {
      this.setState({ seeking: true });
  }
  onSeekChange(e) {
      this.setState({ played: parseFloat(e.target.value) });
  }
  onSeekMouseUp(e) {
      this.setState({ seeking: false });
      this.refs.player.seekTo(parseFloat(e.target.value));
  }
  onProgress(state) {
      if (!this.state.seeking) {
        this.setState(state);
      }
  }
  render() {
    const { audioUrl, actions, inPlaylist } = this.props;

    return (
      <div className = "seven wide column">
        <ReactPlayer
          ref = 'player'
          playing = {this.state.playing} 
          url = {this.state.url}
          onProgress = {this.onProgress} 
          volume = {this.state.volume} 
          height = {150} />
        <div className = "ui slider range">
          <input
            type = 'range' min = {0} max = {1} step = 'any'
            value = {this.state.played}
            onMouseDown = {this.onSeekMouseDown}
            onChange = {this.onSeekChange}
            onMouseUp = {this.onSeekMouseUp} />
        </div>
          <button className = "ui button" onClick = {this.playPause}>
            <i className = {this.state.playing ? "pause icon" : "play icon"}></i>
            {this.state.playing ? "Pause" : "Play"}
          </button>
          <AddToPlaylist audioUrl = {audioUrl} actions = {actions} inPlaylist = {inPlaylist} />
          <ModalShare audioUrl = {audioUrl}/>
          <ModalDonate />
      </div>
      )
    }
};
