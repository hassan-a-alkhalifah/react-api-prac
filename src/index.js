import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import rootReducer from './reducers/rootReducer';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

let unsubscribe = store.subscribe(() =>
console.log(store.getState())
)

const render = (Component) => {
  ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'));
}
render(App);
