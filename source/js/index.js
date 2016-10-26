import React from 'react';
import {render} from 'react-dom';
import Greeter from './greeter.js';

import '../css/index.css';
import customStyles from '../css/background-custom-greeter.css';

render(<Greeter styles={customStyles} />, document.getElementById('root'));
