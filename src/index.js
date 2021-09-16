import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Movimento from './Movimento';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Movimento />
  </React.StrictMode>,
  document.getElementById('root')
);

