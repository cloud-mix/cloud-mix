import React, { Component } from 'react';
import waveformVisual from '../../audioHelpers/waveformVisual.js';

class WavefromVisual extends Component {

  componentDidMount() {
    waveformVisual(this.props.url, this.props.wavesurfer);
  }

  render() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}

export default WavefromVisual;