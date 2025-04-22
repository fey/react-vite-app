// import App from './App.jsx'
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

import Clock from './examples/Clock';
import Card from './components/Card';
import Clicker from './examples/Clicker';

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);

root.render(
  <StrictMode>
    <h2>Card</h2>
    <Card />
    <hr/>
    <h2>Clock</h2>
    <Clock />
    <hr/>
    <h2>Clicker</h2>
    <Clicker />
  </StrictMode>
);
