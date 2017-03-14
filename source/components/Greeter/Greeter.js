import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './greeter.css';

class Greeter extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      secondsElapsed: 0
    };
    this.context = {
      route: React.PropTypes.object
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
      <div styleName="outer">
        <div styleName="inner">
          <span styleName="context">
            Hi {this.props.route.name}! tick: {this.state.secondsElapsed}
          </span>
        </div>
      </div>
    );
  }
}
Greeter.propTypes = {
  route: React.PropTypes.object
};
Greeter.defaultProps = {
  route: {
    name: 'world'
  }
};

export default CSSModules(Greeter, styles, { allowMultiple: true });
