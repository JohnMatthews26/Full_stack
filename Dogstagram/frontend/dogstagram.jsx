import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { requestAllPhoto } from './actions/photo_actions';
import { fetchAllPhoto } from './util/photo_api_util';
import * as APIUtil from './util/follows_api_util';
document.addEventListener('DOMContentLoaded', () => {


  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.APIUtil = APIUtil;
  window.getState = store.getState;
  window.store = store;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
