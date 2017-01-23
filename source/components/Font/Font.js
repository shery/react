import React, { Component } from 'react';

class Font extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      fontFaces: [{ name: '楷书', id: 0 }, { name: '隶书', id: 1 }, { name: '行书', id: 2 }],
      secondsElapsed: 0
    };
  }
  componentDidMount() {
    const oCanvas = document.createElement('canvas');
    oCanvas.width = '200';
    oCanvas.height = '400';
    oCanvas.style = 'border:1px solid #000000;';
    const oCtx = oCanvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      oCtx.drawImage(img, 0, 0);
      oCtx.font = '16px KaiTi';
      oCtx.direction = 'rtl';
      oCtx.textAlign = 'center';
    };
    img.src = 'http://pic.qiantucdn.com/58pic/18/09/24/158PICn58PICHEa_1024.jpg';
    document.body.appendChild(oCanvas);
  }
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  // tick() {
  //   this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  // }
  render() {
    return (
      <div>
        <FontList fontFaces={this.state.fontFaces} />
      </div>
    );
  }
}

export default Font;
