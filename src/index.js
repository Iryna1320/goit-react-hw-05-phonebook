import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
// import { myAction } from './redux/actions';
import './index.css';
import 'modern-normalize/modern-normalize.css';

// console.log(store);
// console.log(store.getState());

// console.log(store.dispatch(myAction(5)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
