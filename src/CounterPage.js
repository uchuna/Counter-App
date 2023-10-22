import React from "react";
import useCounter from "./useCounter";
import { Link } from "react-router-dom";

// This component displays the custom counter.
const CounterPage = () => {
  // It uses the useCounter hook.
  const [count, increment, decrement, reset, setValue] = useCounter(0);

  return (
    <div className="counter-main">
      <>
        <h2 className="custom">Counter App</h2>
        <p className="label">Count: {count}</p>
        {/* You can increment, decrement, reset, and set the counter value. */}
        <div>
          <button className="btn-1" onClick={increment}>
            Increase
          </button>
          <button className="btn-2" onClick={decrement}>
            Decrease
          </button>
          <button className="btn-3" onClick={reset}>
            Reset
          </button>
        </div>
      </>
      <input
        className="input"
        type="number"
        value={count}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <br></br>
      {/* A link to go back to the home page. */}
      <Link to="/">
        <button>Go back to home</button>
      </Link>
    </div>
  );
};

export default CounterPage;
