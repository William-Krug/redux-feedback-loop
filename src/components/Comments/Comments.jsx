/* Import Libraries */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* Import CSS */
import './Comments.css';

/**
 * Function prompts the survey to leave any additional
 * comments and stores their responses in the surveyResponses
 * reducer in the Redux store
 *
 * @param {boolean} verbose if `true` console logs are displayed for testing and debugging
 */
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
      {/* Survey Question */}
      <h2>Any comments you want to leave?</h2>
      <form onSubmit={recordComments}>
        <div className="left-align">
          <p>Comments</p>
        </div>
        <div className="left-align">
          {/* User Response */}
          <input
            type="text"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
          />
          <button type="submit">NEXT</button>
        </div>
      </form>
    </div>
  );
}

export default Comments;
