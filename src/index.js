import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import App from './containers';
import reducer from './reducers';

const store = createStore(reducer);

store.subscribe(()=>{
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);