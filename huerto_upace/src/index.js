import React from 'react';
import ReactDOM from 'react-dom';
import './front/styles/index.scss';
import Layout from './front/js/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from '../src/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
