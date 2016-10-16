import React from 'react';
import {render} from 'react-dom';
import Greeter from './module.js';

import '../css/index.css';

render(<Greeter />, document.getElementById('root'));

//  注意元件開頭第一個字母都要大寫
class MyComponent extends React.Component {
    // render 是 Class based 元件唯一必須的方法（method）
    render() {
        return (
            <div>Hello, World!</div>
        );
    }
}

// 將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
ReactDOM.render(<MyComponent/>, document.getElementById('app'));
