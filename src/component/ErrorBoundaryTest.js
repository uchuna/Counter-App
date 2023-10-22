import { useState } from "react";

// This component demonstrates how to handle errors using an Error Boundary.
function ErrorBoundaryTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Oops! there is error in the react tree");
  }

  // It allows you to simulate an error with a button click.
  return (
    <div>
      <ul>
        <li>
          <strong>🛡️ ErrorBoundary Page</strong>: Witness how we gracefully
          handle any unexpected surprises...
          <button onClick={() => setHasError(true)}>ErrorBoundary test</button>
        </li>
      </ul>
    </div>
  );
}

export default ErrorBoundaryTest;
