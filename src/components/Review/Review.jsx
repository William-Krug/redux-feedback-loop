/* Import Libraries */
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* Import CSS */
import './Review.css';

/**
 * Function allows the survey taker to review their answers before
 * storing their responses in the surveyResponses reducer in the Redux store
 *
 * @param {boolean} verbose if `true` console logs are displayed for testing and debugging
 */
function Review({ verbose }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const axios = require('axios');

  /* Declare state variables so that DOM can be rendered */
  const surveyResponses = useSelector((store) => store.surveyResponses);

  /* Helper Functions */

  /* Function sends all survey responses (as an object) to the database */
  const submitSurvey = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** in submitSurvey() ***');
    }

    // Ping the server to POST user's survey response
    // to the database
    axios
      .post('/feedback', surveyResponses)
      .then((response) => {
        // Breadcrumbs for testing and debugging
        console.log('AXIOS POST response for /feedback:', response);
        clearSurveyResponses();

        // Navigate to next page
        history.push('/submissionConfirmation');
      })
      .catch((error) => {
        alert('Error with request. Please try again later.');
        // Breadcrumbs for testing and debugging
        console.log('AXIOSPOST /feedback error:', error);
      });
  };

  /* Clear all survey responses from Redux store
     so that fresh/new responses can be added by next user */
  const clearSurveyResponses = () => {
    dispatch({
      type: 'CLEAR_SURVEY_RESPONSES',
    });
  };

  /* Function allows the user to go back and edit a previous response.
     Users are taken to another page for question review and brought
     back to this review page after updating their answer. */
  const editResponse = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** in editResponse() ***');
      console.log('\tevent.target.value:', event.target.value);
    }

    // Store the question to be reviewed in the editResponse component
    // in the Redux store
    dispatch({
      type: 'EDIT_RESPONSE',
      payload: event.target.value,
    });

    // Navigate to the <EditResponse> component to review
    // question and answer
    history.push('/editResponse');
  };

  return (
    <div className="survey-review">
      <h2>Review Your Feedback</h2>
      <div className="response-table">
        {/* Table used to review feedback before submission */}
        <table>
          {/* Table Header */}
          <thead>
            <tr>
              <th>Question</th>
              <th>Response</th>
              <th></th>
            </tr>
          </thead>
          {/* Response Answers for Review */}
          <tbody>
            <tr>
              <td className="review-question">Feeling:</td>
              <td className="response">{surveyResponses.feelingsScore}</td>
              <td>
                <button value={'feelingsScore'} onClick={editResponse}>
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="review-question">Understanding:</td>
              <td className="response">{surveyResponses.understandingScore}</td>
              <td>
                <button value={'understandingScore'} onClick={editResponse}>
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="review-question">Supported:</td>
              <td className="response">{surveyResponses.supportedScore}</td>
              <td>
                <button value={'supportedScore'} onClick={editResponse}>
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className="review-question">Comments:</td>
              <td className="response">{surveyResponses.comments}</td>
              <td>
                <button value={'comments'} onClick={editResponse}>
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={submitSurvey}>SUBMIT</button>
      </div>
    </div>
  );
}

export default Review;
