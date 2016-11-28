import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from '../css/greeter.css'

class Greeter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div styleName='outer'>
                <div styleName='inner'>
                    <span styleName='context'>Hi {this.props.name}!</span>
                </div>
            </div>
        );
    }
}
Greeter.propTypes = {
    name: React.ProTypes.string,
}
Greeter.defaultProps = {
    name: 'props'
}

export default CSSModules(Greeter, styles, { allowMultiple: true });
