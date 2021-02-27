/* Import Libraries */
import { useSelector } from 'react-redux';
import { axios } from 'react';

function Review({ verbose }) {
  const surveyResponses = useSelector((store) => store.surveyResponses);

  const submitSurvey = () => {
    if (verbose) {
      console.log('*** in submitSurvey() ***');
    }

    axios.post();
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
