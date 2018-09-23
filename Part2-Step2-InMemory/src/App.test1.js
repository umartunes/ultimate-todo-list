import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './config/store'
import App from './App';

require( './config/global' )
require( './config/axios' )
// require( './config/db' )
require( './config/fontawesome' )

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
