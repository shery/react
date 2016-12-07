import React, { Component } from 'react';

const FontList = props => (
  <select>
    {
      props.fontFaces.map(item => (
        <option key={item.id}>{item.fontFace}</option>
      ))
    }
  </select>
);
class Font extends Component {
  constructor(props) {
    super(props);
    // this.tick = this.tick.bind(this);
    this.state = {
      fontFaces: ['楷书', '隶书', '行书'],
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
        <FontList items={this.state.fontFace} />
      </div>
    );
  }
}
// Font.propTypes = {
//   name: React.PropTypes.string
// };
// Font.defaultProps = {
//   name: 'props'
// };

export default Font;
