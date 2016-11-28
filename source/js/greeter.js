import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from '../css/greeter.css'

// class Greeter extends Component {
//     render() {
//         return (
//             <div styleName='outer'>
//                 <div styleName='inner'>
//                     <span styleName='context'>Hi there and React greetings!</span>
//                 </div>
//             </div>
//         );
//     }
// }
const lists = ['JavaScript', 'Java', 'Node', 'Python'];

class HelloMessage extends React.Component {
  render() {
    return (
    <ul>
      {lists.map((result, index) => {
        return (<li key={index}>{result}</li>);
      })}
    </ul>);
  }
}

// export default CSSModules(Greeter, styles, { allowMultiple: true });
export default CSSModules(HelloMessage, styles, { allowMultiple: true });
