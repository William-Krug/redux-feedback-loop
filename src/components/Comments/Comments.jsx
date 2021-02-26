/* Import Libraries */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* Import CSS */
import './Comments.css';

function Comments({ verbose }) {
  const dispatch = useDispatch();
  const history = useHistory();

  /* Declare state variables */
  const [comments, setComments] = useState('');

  /* Helper functions */
  const recordComments = (event) => {
    // Keep page from reloading
    event.preventDefault();

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** in recordComments() ***');
      console.log('\tcomments:', comments);
    }

    // Save value in the Redux store
    dispatch({
      type: 'ADD_COMMENTS',
      payload: comments,
    });

    // Clear input
    setComments('');

    // Navigate to next question
    history.push('/review');
  };

  return (
    <div className="question">
      <form onSubmit={recordComments}>
        <h2>How well are you being supported?</h2>
        <div className="left-align">
          <p>Enter a number from 1 to 5</p>
          <p>1 = I feel totally alone</p>
          <p>5 = I know the instructors got my back</p>
        </div>
        <div className="left-align">
          <input
            type="number"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
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

export default Comments;
