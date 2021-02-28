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
/**
 * Reducer collects survey responses as attributes in an object
 * so that all responses are collectively held per survey taker
 *
 * @param {object} state the variable stored in the Redux store
 * @param {*} action tells the function what to do and what data to add to the state
 */
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

const editResponse = (state = '', action) => {
  switch (action.type) {
    case 'EDIT_RESPONSE':
      return action.payload;
    default:
      return state;
  }
};

/* Redux Store */
const store = createStore(
  combineReducers({
    surveyResponses,
    editResponse,
  }),
  applyMiddleware(logger)
);

/* Allow the App component access to the store */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();
