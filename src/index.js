import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('offline-plugin/runtime').install();
require('../public/manifest.json');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
