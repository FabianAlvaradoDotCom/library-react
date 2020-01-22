import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import show_book_form_reducer from './store/show_book_form_reducer';
import book_details_reducer from './store/book_details_reducer';
import book_list_reducer from './store/book_list_reducer';
import { Provider } from 'react-redux';

const store = createStore( combineReducers({
  show_book_form_reducer,
  book_details_reducer,
  book_list_reducer
}) );


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
