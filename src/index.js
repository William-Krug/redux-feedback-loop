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
// Collects survey responses as attributes in an object
// so that all responses are collectively held per survey taker
const surveyResponses = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FEELINGS':
      return {
        ...state,
        feelingsScore: action.payload,
      };
    case 'ADD_UNDERSTANDING':
      return {
        ...state,
        understandingScore: action.payload,
      };
    case 'ADD_SUPPORTED':
      return {
        ...state,
        supportedScore: action.payload,
      };
    case 'ADD_COMMENTS':
      return {
        ...state,
        comments: action.payload,
      };
    case 'CLEAR_SURVEY_RESPONSES':
      return {};
    default:
      return state;
  }
};

/* Redux Store */
const store = createStore(
  combineReducers({ surveyResponses }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();
