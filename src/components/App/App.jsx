/* Import Libraries */
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

/* Import CSS and Components */
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Router>
    </div>
  );
}

export default App;
