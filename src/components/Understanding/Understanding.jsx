/* Import Libraries */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* Import CSS */
import './Understanding.css';

/**
 * Function prompts the survey taker about their understanding
 * of course material and stores their responses in the
 * surveyResponses reducer in the Redux store
 *
 * @param {boolean} verbose if `true` console logs are displayed for testing and debugging
 */
function Understanding({ verbose }) {
  const dispatch = useDispatch();
  const history = useHistory();

  /* Declare state variables */
  const [understanding, setUnderstanding] = useState(0);

  /* Helper functions */
  const recordUnderstanding = (event) => {
    // Keep page from reloading
    event.preventDefault();

    // Form validation
    if (understanding === 0 || understanding === undefined) {
      alert('*** Please enter a number between 1 and 5 and try again. ***');
    }

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** in recordUnderstanding() ***');
      console.log('\tunderstanding:', understanding);
    }

    // Save value in the Redux store
    dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: understanding,
    });

    // Clear input
    setUnderstanding(0);

    // Navigate to next question
    history.push('/supported');
  };

  return (
    <div className="question">
      {/* Survey Question */}
      <h2>How well are you understanding the content?</h2>
      <form onSubmit={recordUnderstanding}>
        {/* Question Description */}
        <div className="left-align">
          <p>Enter a number from 1 to 5</p>
          <p>1 = I'm completely lost</p>
          <p>5 = I could teach this stuff</p>
        </div>
        <div className="left-align">
          {/* User Response */}
          <input
            type="number"
            value={understanding}
            onChange={(event) => setUnderstanding(event.target.value)}
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

export default Understanding;
