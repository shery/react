import React from 'react';
import {render} from 'react-dom';
import Greeter from './greeter.js';
import Todo from './todo.js';


import '../css/index.css';

render(<Greeter name="React" />, document.getElementById('root'));
render(<Todo />, document.getElementById('todo'));
