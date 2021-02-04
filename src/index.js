import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyled } from './style.js'
import { IconfontStyled } from './static/iconfont/iconfont'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <IconfontStyled />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
