import React, { Component } from 'react';

const FontList = props => (
  <ul>
    {
      props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))
    }
  </ul>
);
class Font extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      secondsElapsed: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick() {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  }
  render() {
    return (
      <div styleName="outer">Hi {this.props.name}! tick: {this.state.secondsElapsed}</div>
    );
  }
}
Font.propTypes = {
  name: React.PropTypes.string
};
Font.defaultProps = {
  name: 'props'
};

export default Font;
