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
- [ ] set up Router
  - [ ] `npm install react-router-dom`
  - [ ] set up Router
  - [ ] set up Router
- [ ] How are you feeling today?
  - [ ] `input type="number" />`
  - [ ] `<button>`
  - [ ] form validation
    - [ ] HTML
    - [ ] client check
- [ ] How well are you understanding the content?
  - [ ] `input type="number" />`
  - [ ] `<button>`
  - [ ] form validation
    - [ ] HTML
    - [ ] client check
- [ ] How well are you being supported?
  - [ ] `input type="number" />`
  - [ ] `<button>`
  - [ ] form validation
    - [ ] HTML
    - [ ] client check
- [ ] Any comments you want to leave?
  - [ ] `input type="text" />`
  - [ ] `<button>`
- [ ] Create routes for each page of the form
- [ ] Header component??
- [ ] Review Component
  - [ ] collects all data for review
  - [ ] `<button>Submit</button>`
    - [ ] submits feedback
    - [ ] saves data to db
    - [ ] submission success page
      - [ ] button to restart process
        - [ ] resets all the data
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
