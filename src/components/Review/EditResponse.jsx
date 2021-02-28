/* Import Libraries */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * Function allows the user to update any previously answered
 * questions (and stores their updated response in the
 * surveyResponses reducer) before submitting their feedback
 *
 * @param {boolean} verbose if `true` console logs are displayed for testing and debugging
 */
function EditResponse({ verbose }) {
  const dispatch = useDispatch();
  const history = useHistory();

  /* Declare state variables
     so that DOM updates/renders as user takes survey */
  const editResponse = useSelector((store) => store.editResponse);
  const surveyResponses = useSelector((store) => store.surveyResponses);
  const [updatedResponse, setUpdatedResponse] = useState(
    surveyResponses[editResponse]
  );

  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in EditResponse Component ***');
    console.log('\teditResponse:', editResponse);
  }

  /* Helper functions */

  /* Function captures user input on form submission and sends their
     response to the Redux store to be stored in the surveyResponses
     component */
  const updateAnswer = (event) => {
    // Keep page from reloading
    event.preventDefault();

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** in updateAnswer() ***');
      console.log('\tupdatedResponse:', updatedResponse);
    }

    // Save updated value in the redux store
    // `editResponse` becomes the key and `updatedResponse`
    // becomes the value in the surveyResponses reducer
    dispatch({
      type: 'UPDATE_RESPONSE',
      payload: {
        property: editResponse,
        value: updatedResponse,
      },
    });

    // Navigate back to the responses review pages
    history.push('/review');
  };

  /* Function renders the appropriate feedback question
     base on the editResponse values associtaed with the 
     button click on the review page */
  const rerenderQuestion = () => {
    switch (editResponse) {
      // Feeling Question
      case 'feelingsScore':
        return (
          <div className="question">
            {/* Survey Question */}
            <h2>How are you feeling today?</h2>
            <form onSubmit={updateAnswer}>
              {/* Question Description */}
              <div className="left-align">
                <p>Enter a number from 1 to 5</p>
                <p>1 = I'm feeling horrible</p>
                <p>5 = I'm fantastic</p>
              </div>
              <div className="left-align">
                {/* User Response */}
                <input
                  type="number"
                  value={updatedResponse}
                  onChange={(event) => setUpdatedResponse(event.target.value)}
                  min="1"
                  max="5"
                  required
                />
                <button type="submit">NEXT</button>
              </div>
            </form>
          </div>
        );

      // Understanding question
      case 'understandingScore':
        return (
          <div className="question">
            {/* Survey Question */}
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={updateAnswer}>
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
                  value={updatedResponse}
                  onChange={(event) => setUpdatedResponse(event.target.value)}
                  min="1"
                  max="5"
                  required
                />
                <button type="submit">NEXT</button>
              </div>
            </form>
          </div>
        );

      // Supported question
      case 'supportedScore':
        return (
          <div className="question">
            {/* Survey Question */}
            <h2>How well are you being supported?</h2>
            <form onSubmit={updateAnswer}>
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
                  value={updatedResponse}
                  onChange={(event) => setUpdatedResponse(event.target.value)}
                  min="1"
                  max="5"
                  required
                />
                <button type="submit">NEXT</button>
              </div>
            </form>
          </div>
        );

      // Comments question
      case 'comments':
        return (
          <div className="question">
            {/* Survey Question */}
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={updateAnswer}>
              <div className="left-align">
                <p>Comments</p>
              </div>
              <div className="left-align">
                {/* User Response */}
                <input
                  type="text"
                  value={updatedResponse}
                  onChange={(event) => setUpdatedResponse(event.target.value)}
                />
                <button type="submit">NEXT</button>
              </div>
            </form>
          </div>
        );
    }
  };

  return (
    <div>
      <h2>Edit Response</h2>
      {rerenderQuestion()}
    </div>
  );
}

export default EditResponse;
