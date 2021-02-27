# To Do

## Base Mode

- [x] set up Redux store
  - [x] Run `npm install redux react-redux` from the terminal
  - [x] Run `npm install redux-logger` from the terminal
  - [x] `import { createStore, combineReducers, applyMiddleware } from 'redux'`
  - [x] `import { Provider } from 'react-redux'`
  - [x] `import logger from 'redux-logger'`
  - [x] `const store = createStore(combineReducers({reducer1, reducer2, ...}),applyMiddleware(logger));`
  - [x] `ReactDOM.render(<React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>,document.getElementByID('root'));`
  - [x] reducers
  - [x] provider
- [x] set up Router
  - [x] `npm install react-router-dom`
  - [x] set up Router
  - [x] set up Router
- [x] How are you feeling today?
  - [x] `input type="number" />`
  - [x] `<button>`
  - [x] form validation
    - [x] HTML
    - [x] client check
- [x] How well are you understanding the content?
  - [x] `input type="number" />`
  - [x] `<button>`
  - [x] form validation
    - [x] HTML
    - [x] client check
- [x] How well are you being supported?
  - [x] `input type="number" />`
  - [x] `<button>`
  - [x] form validation
    - [x] HTML
    - [x] client check
- [x] Any comments you want to leave?
  - [x] `input type="text" />`
  - [x] `<button>`
- [x] Create routes for each page of the form
- [ ] Review Component
  - [x] collects all data for review
  - [x] `<button>Submit</button>`
    - [x] submits feedback
    - [x] saves data to db
    - [ ] submission success page
      - [ ] button to restart process
        - [x] resets all the data
        - [ ] navigates back to first page of survey

## Stretch Goals

- [ ] allow users to go back and change their score
- [ ] styling with Material-UI
- [ ] ADMIN Section
  - [ ] display all existing feedback at `/admin`
    - [ ] feedback listed in newest to oldest
  - [ ] delete existing feedback
    - [ ] prompt before delete
  - [ ] flag feedback for further review
- [ ] deploy to Heroku
