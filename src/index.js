import './css/body.css';
import './css/app.css';
import './css/header.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('app')
    );
  });
}

