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
const surveyResponses = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FEELINGS':
      return;
    case 'ADD_UNDERSTANDING':
      return;
    case 'ADD_SUPPORTED':
      return;
    case 'ADD_COMMENTS':
      return;
    default:
      return state;
  }
};

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
