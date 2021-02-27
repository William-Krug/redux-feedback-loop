/* Import Libraries */
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
            </tr>
          </thead>
          {/* Response Answers for Review */}
          <tbody>
            <tr>
              <td>Feeling:</td>
              <td>{surveyResponses.feelingsScore}</td>
            </tr>
            <tr>
              <td>Understanding:</td>
              <td>{surveyResponses.understandingScore}</td>
            </tr>
            <tr>
              <td>Supported:</td>
              <td>{surveyResponses.supportedScore}</td>
            </tr>
            <tr>
              <td>Comments:</td>
              <td>{surveyResponses.comments}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={submitSurvey}>SUBMIT</button>
    </div>
  );
}

export default Review;
