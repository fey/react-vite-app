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
    <Card />
    <Clock />
    <Clicker />
  </StrictMode>
);
