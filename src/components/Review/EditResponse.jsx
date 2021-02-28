/* Import Libraries */
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function EditResponse({ verbose }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const axios = require('axios');

  const editResponse = useSelector((store) => store.editResponse);
  const surveyResponses = useSelector((store) => store.surveyResponses);

  const rerenderQuestion = () => {
    switch (editResponse) {
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
                  value={surveyResponses}
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
                  value={surveyResponses}
                  onChange={(event) => setUnderstanding(event.target.value)}
                  min="1"
                  max="5"
                  required
                />
                <button type="submit">NEXT</button>
              </div>
            </form>
          </div>
        );
      case 'supportedScore':
        return (
          <div className="question">
            {/* Survey Question */}
            <h2>How well are you being supported?</h2>
            <form onSubmit={recordSupported}>
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
                  value={surveyResponses}
                  onChange={(event) => setSupported(event.target.value)}
                  min="1"
                  max="5"
                  required
                />
                <button type="submit">NEXT</button>
              </div>
            </form>
          </div>
        );
      case 'comments':
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
                  value={surveyResponses}
                  onChange={(event) => setComments(event.target.value)}
                />
                <button type="submit">NEXT</button>
              </div>
            </form>
          </div>
        );
    }
  };

  const updateAnswer = () => {
    if (verbose) {
      console.log('*** in updateAnswer() ***');
    }

    history.push('/review');
  };

  if (verbose) {
    console.log('*** in EditResponse Component ***');
    console.log('\teditResponse:', editResponse);
  }

  return (
    <div>
      <h2>Edit Response</h2>
      {rerenderQuestion}
    </div>
  );
}

export default EditResponse;
