import React, { Component } from 'react';

// class Canvas extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     const oCanvas = document.createElement('canvas');
//     oCanvas.width = '200';
//     oCanvas.height = '400';
//     oCanvas.style = 'border:1px solid #000000;';
//     const oCtx = oCanvas.getContext('2d');
//     oCtx.font = '30px KaiTi';
//     oCtx.fillText('长歌行', 10, 50);
//     document.body.appendChild(oCanvas);
//   }
//   render() {
//     return (
//       <canvas id="myCanvas" />
//     );
//   }
// }
const FontList = props => (
  <select>
    {
      props.fontFaces.map(item => (
        <option key={item.id}>{item.name}</option>
      ))
    }
  </select>
);
class Font extends Component {
  constructor(props) {
    super(props);
    // this.tick = this.tick.bind(this);
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
    oCtx.font = '30px KaiTi';
    const textLength = oCtx.measureText('你好啊你好，');
    oCtx.fillText('长歌行长歌行长歌行', 10, 50, textLength.width);
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
