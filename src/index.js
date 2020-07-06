import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PromisePolyfill from 'promise-polyfill';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import store from './store';
import './styles/styles.scss';

if (!window.Promise) {
  window.Promise = PromisePolyfill;
}

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);
