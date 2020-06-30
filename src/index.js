import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Scrollbar from 'smooth-scrollbar';

ReactDOM.render(
    <App />,

  document.getElementById('root')
);

// Scrollbar.init(document.querySelector('#root'), { 'damping': 0.1, renderByPixels: true, delegateTo: document.querySelector('body') });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
