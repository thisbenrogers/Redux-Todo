import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';

// const store = createStore();

ReactDOM.render(
  // <Provider>
  <App />,
  // </Provider>,
  document.getElementById('root')
);
