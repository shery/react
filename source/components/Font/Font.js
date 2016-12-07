import React, { Component } from 'react';

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
  // componentDidMount() {
  //   this.interval = setInterval(this.tick, 1000);
  // }
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
