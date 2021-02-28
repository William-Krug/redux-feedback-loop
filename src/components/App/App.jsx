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
import EditResponse from '../Review/EditResponse';
import SubmissionConfirmation from '../SubmissionConfirmation/SubmissionConfirmation';

const verbose = true;

/**
 * Function is the main page of the app with routes to switch pages
 * so that pages can be loaded from cache and not have to come from the server
 */
function App() {
  return (
    <div className="App">
      {/* Header -> Present on all pages */}
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        {/* Start of feedback (Feelings Question) */}
        <Route exact path="/">
          <Feelings verbose={verbose} />
        </Route>

        {/* Understanding Question */}
        <Route exact path="/understanding">
          <Understanding verbose={verbose} />
        </Route>

        {/* Supported Question */}
        <Route exact path="/supported">
          <Supported verbose={verbose} />
        </Route>

        {/* Comments Question */}
        <Route exact path="/comments">
          <Comments verbose={verbose} />
        </Route>

        {/* Review Responses */}
        <Route exact path="/review">
          <Review verbose={verbose} />
        </Route>

        {/* Confirm Submission */}
        <Route exact path="/submissionConfirmation">
          <SubmissionConfirmation verbose={verbose} />
        </Route>

        {/* Edit Response */}
        <Route exact path="/editResponse">
          <EditResponse verbose={verbose} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
