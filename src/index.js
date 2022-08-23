import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import NavBar from './components/navBar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);
reportWebVitals();
 