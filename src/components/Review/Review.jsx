/* Import Libraries */
import { useSelector } from 'react-redux';

function Review({ verbose }) {
  const surveyResponses = useSelector((store) => store.surveyResponses);
  return (
    <div className="survey-review">
      <h2>Review Your Feedback</h2>
      <div className="response-table">
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Response</th>
            </tr>
          </thead>
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
      <button>SUBMIT</button>
    </div>
  );
}

export default Review;
