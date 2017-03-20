// 引用 babel-polyfill 避免瀏覽器不支援部分 ES6 用法
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import CounterContainer from '../common/containers/CounterContainer';
import configureStore from '../common/store/configureStore';

const initialState = window.__PRELOADED_STATE__;

const store = configureStore(fromJS(initialState));

// 接下來就跟一般的 React App 一樣，把 store 透過 Provider 往下傳到 Component 中
ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('app')
);
