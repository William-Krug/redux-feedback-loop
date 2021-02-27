/* Import Libraries */
import { useSelector, useDispatch } from 'react-redux';
import { axios } from 'react';

function Review({ verbose }) {
  const dispatch = useDispatch();
  const surveyResponses = useSelector((store) => store.surveyResponses);

  const submitSurvey = () => {
    if (verbose) {
      console.log('*** in submitSurvey() ***');
    }

    // Ping the server to POST user's survey response
    // to the database
    axios
      .post('/feedback', surveyResponses)
      .then((response) => {
        console.log('AXIOS POST response for /feedback:', response);
        clearSurveyResponses();
      })
      .catch((error) => {
        alert('Error with request. Please try again later.');
        console.log('AXIOSPOST /feedback error:', error);
      });
  };

  // Clear all survey responses from Redux store
  // so that fresh/new responses can be added by next user
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
