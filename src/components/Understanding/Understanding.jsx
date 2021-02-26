/* Import Libraries */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* Import CSS */
import './Understanding.css';

function Understanding() {
  return (
    <div className="question">
      <form onSubmit={recordFeelings}>
        <h2>How well ar you understanding the content?</h2>
        <div className="left-align">
          <p>Enter a number from 1 to 5</p>
          <p>1 = I'm completely lost</p>
          <p>5 = I could teach this stuff</p>
        </div>
        <div className="left-align">
          <input
            type="number"
            value={feelings}
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
}

export default Understanding;
