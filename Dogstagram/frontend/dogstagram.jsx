import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Dogstagram</h1>, root);
});
