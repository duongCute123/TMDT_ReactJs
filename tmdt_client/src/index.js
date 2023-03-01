import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { createStore } from 'redux';
import allReducer from './component/reducer';
import { Provider } from "react-redux"
const store = createStore(allReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
