import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

window.process = {};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
