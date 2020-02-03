import React, { Component } from 'react';
import ImageButton from 'components/atoms/ImageButton/ImageButton';

class rattingAnimation extends Component {
  render() {
    return (
      <div>
        <h1>Ratting Animation</h1>
        <h2>IE/Edgeにおいて、animation/transitionを使用して画像を移動・拡大縮小させるとカクカクするバグ</h2>
        <ImageButton />
      </div>
    );
  }
}

export default rattingAnimation;
