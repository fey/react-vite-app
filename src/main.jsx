// import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card.jsx';
import 'bootstrap/dist/css/bootstrap.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);

root.render(<React.StrictMode><Card /></React.StrictMode>);
