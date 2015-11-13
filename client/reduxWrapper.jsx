import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();
//top level Provider makes the app component "smart", i.e. aware of redux. 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
