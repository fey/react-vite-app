// import App from './App.jsx'
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card.jsx';
import 'bootstrap/dist/css/bootstrap.css';

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);

root.render(
  <StrictMode>
    <Card />
  </StrictMode>
);
