import React, { Component } from 'react';
import ImageButton from 'components/atoms/ImageButton/ImageButton';

class RattingAnimation extends Component {
  render() {
    return (
      <div>
        <h1>Ratting Animation</h1>
        <h2>IE/Edgeにおいて、animation/transitionを使用して画像を移動・拡大縮小させるとカクカクするバグ</h2>
        <ImageButton />
         <p>animation/transitionをさせたい要素に
         <br />
         <code>transform: scale(1.0, 1.0) rotate(0.0001deg)</code>
         <br />
         を足してハードウェアレンダリングを行わせるようにする。</p>
      </div>
    );
  }
}

export default RattingAnimation;
