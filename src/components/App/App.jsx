/* Import Libraries */
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

/* Import CSS and Components */
import './App.css';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import SubmissionConfirmation from '../SubmissionConfirmation/SubmissionConfirmation';

const verbose = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <Feelings verbose={verbose} />
        </Route>
        <Route exact path="/understanding">
          <Understanding verbose={verbose} />
        </Route>
        <Route exact path="/supported">
          <Supported verbose={verbose} />
        </Route>
        <Route exact path="/comments">
          <Comments verbose={verbose} />
        </Route>
        <Route exact path="/review">
          <Review verbose={verbose} />
        </Route>
        <Route exact path="/submissionConfirmation">
          <SubmissionConfirmation verbose={verbose} />
        </Route>
        <Route></Route>
      </Router>
    </div>
  );
}

export default App;
