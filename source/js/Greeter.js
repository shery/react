import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../css/greeter.css'

class Greeter extends Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {
            secondsElapsed: 0,
        }
    }
    tick () {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div styleName='outer'>
                <div styleName='inner'>
                    <span styleName='context'>Hi {this.props.name}! tick: {this.state.secondsElapsed}</span>
                </div>
            </div>
        );
    }
}
Greeter.propTypes = {
    name: React.PropTypes.string,
}
Greeter.defaultProps = {
    name: 'props'
}

export default CSSModules(Greeter, styles, { allowMultiple: true });
