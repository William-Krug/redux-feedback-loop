/* Import Libraries */
import { useState } from 'react';

function Feelings({ verbose }) {
  /* Declare state variables */
  const [feelings, setFeelings] = useState(0);

  /* Helper functions */
  const recordFeelings = (event) => {
    // Keep page from reloading
    event.preventDefault();
    if (verbose) {
      console.log('*** in recordFeelings() ***');
      console.log('\tfeelings:', feelings);
    }
  };

  return (
    <div>
      <form onSubmit={recordFeelings}>
        <h2>How are you feeling today?</h2>
        <label>Feeling?</label>
        <input
          type="number"
          value={feelings}
          onChange={(event) => setFeelings(event.target.value)}
          min="1"
          max="5"
          required
        />
        <button type="submit">NEXT</button>
      </form>
    </div>
  );
}

export default Feelings;
