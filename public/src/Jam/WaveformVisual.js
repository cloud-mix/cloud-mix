import React, { Component } from 'react';
import waveformVisual from '../../audioHelpers/waveformVisual.js';

class WavefromVisual extends Component {

  componentDidMount() {
    waveformVisual(this.props.url);
  }

  render() {
    return (
      <div>
        <div className='waveform'></div>
      </div>
    );
  }
}

export default WavefromVisual;