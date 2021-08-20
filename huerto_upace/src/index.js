import React from 'react';
import ReactDOM from 'react-dom';
import './front/styles/index.scss';
import Layout from './front/js/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.HUERTO_UPACE_AUTH0_DOMAIN;
const clientId = process.env.HUERTO_UPACE_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <Layout />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

