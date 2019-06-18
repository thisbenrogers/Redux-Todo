import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import reduceTodos from './reducers';

import App from './components/App';

// const store = createStore(reduceTodos);

ReactDOM.render(
  // <Provider>
  <App />,
  // </Provider>,
  document.getElementById('root')
);
