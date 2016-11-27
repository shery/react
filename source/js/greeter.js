import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from '../css/greeter.css'

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
const list = ['java','javascript','python'];

class LIST extends Component {
    render() {
        return (
            <ul>
                {list.map((result, index) => {
                    return (<li key={index}>{result}</li>);
                }
                )}
            </ul>
        );
    }
}

export default CSSModules(Greeter, styles, { allowMultiple: true });
