import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
//para que me funcionen las rutas devo envolver todo con router e importarlo, sino olvidate
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


