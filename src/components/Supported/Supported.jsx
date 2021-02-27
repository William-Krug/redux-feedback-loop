/* Import Libraries */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* Import CSS */
import './Supported.css';

/**
 * Function prompts the survey taker about how supported they
 * feel and stores their responses in the surveyResponses
 * reducer in the Redux store
 *
 * @param {boolean} verbose if `true` console logs are displayed for testing and debugging
 */
function Supported({ verbose }) {
  const dispatch = useDispatch();
  const history = useHistory();

  /* Declare state variables
     so that DOM updates/renders as user takes survey */
  const [supported, setSupported] = useState(0);

  /* Helper functions */
  const recordSupported = (event) => {
    // Keep page from reloading
    event.preventDefault();

    // Form validation (client side)
    if (supported === 0 || supported === undefined) {
      alert('*** Please enter a number between 1 and 5 and try again. ***');
    }

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** in recordSupported() ***');
      console.log('\tsupported:', supported);
    }

    // Save value in the Redux store
    dispatch({
      type: 'ADD_SUPPORTED',
      payload: supported,
    });

    // Clear input
    setSupported(0);

    // Navigate to next question
    history.push('/comments');
  };

  return (
    <div className="question">
      {/* Survey Question */}
      <h2>How well are you being supported?</h2>
      <form onSubmit={recordSupported}>
        {/* Question Description */}
        <div className="left-align">
          <p>Enter a number from 1 to 5</p>
          <p>1 = I feel totally alone</p>
          <p>5 = I know the instructors got my back</p>
        </div>
        <div className="left-align">
          {/* User Response */}
          <input
            type="number"
            value={supported}
            onChange={(event) => setSupported(event.target.value)}
            min="1"
            max="5"
            required
          />
          <button type="submit">NEXT</button>
        </div>
      </form>
    </div>
  );
}

export default Supported;
