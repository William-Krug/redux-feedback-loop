/* Import Libraries */
import { useHistory } from 'react-router-dom';

/* Import CSS */
import './SubmissionConfirmation.css';

/**
 * Function thanks the user for taking the survey and allows them
 * to start another feedback
 *
 * @param {boolean} verbose if `true` console logs are displayed for testing and debugging
 */
function SubmissionConfirmation({ verbose }) {
  const history = useHistory();

  return (
    <div>
      <div>
        {/* Thank you image */}
        <img
          src="https://inventionland.com/wp-content/uploads/2015/09/National_Thank_You_Day.png"
          alt="Thank You in fancy script"
        />
      </div>
      <h2>Submission Confirmation</h2>
      {/* Thank you note */}
      <p>You have successfully submitted your feedback.</p>
      <p>Thank you for your time and honesty in the responses.</p>
      <p>Click the button below to submit new feedback.</p>
      {/* Option to restart feedback */}
      <button onClick={() => history.push('/')}>
        Start New Feedback Survey
      </button>
    </div>
  );
}

export default SubmissionConfirmation;
