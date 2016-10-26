import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from 'greeter.css'

class Greeter extends Component {
    render() {
        return (
            <div styleName='outer'>
                <div styleName='inner'>
                    <span styleName='context'>Hi there and React greetings!</span>
                </div>
            </div>
        );
    }
}

export default CSSModules(Greeter, styles);
