/* Import Libraries */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* Import CSS */
import './Feelings.css';

function Feelings({ verbose }) {
  const dispatch = useDispatch();
  const history = useHistory();

  /* Declare state variables */
  const [feelings, setFeelings] = useState(0);

  /* Helper functions */
  const recordFeelings = (event) => {
    // Keep page from reloading
    event.preventDefault();

    // Form validation
    if (feelings === 0 || feelings === undefined) {
      alert('*** Please enter a number between 1 and 5 and try again. ***');
    }

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** in recordFeelings() ***');
      console.log('\tfeelings:', feelings);
    }

    // Save value in the Redux store
    dispatch({
      type: 'ADD_FEELINGS',
      payload: feelings,
    });

    // Clear input
    setFeelings(0);

    // Navigate to next question
    history.push('/question2');
  };

  return (
    <div className="question">
      <form onSubmit={recordFeelings}>
        <h2>How are you feeling today?</h2>
        <div className="left-align">
          <p>Enter a number from 1 to 5</p>
          <p>1 = I'm feeling horrible</p>
          <p>5 = I'm fantastic</p>
        </div>
        <div className="left-align">
          <input
            type="number"
            value={feelings}
            onChange={(event) => setFeelings(event.target.value)}
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

export default Feelings;
