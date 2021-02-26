/* Import Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/* Import CSS and Components */
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

/* Reducers */

/* Redux Store */
const store = createStore(combineReducers({}), applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();
