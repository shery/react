import React from 'react';
import {render} from 'react-dom';
import Greeter from './greeter.js';
import TodoApp from './todo.js';


import '../css/index.css';

render(<Greeter name="React" />, document.getElementById('root'));
render(<TodoApp />, document.getElementById('todo'));
