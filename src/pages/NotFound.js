import React from "react";
import { Link } from "react-router-dom";

// This component displays a "Page Not Found" message.
export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "7%" }}>
      <h1>
        404 - Page Not Found <span style={{ fontSize: "5rem" }}>😔</span>
      </h1>
      <p>
        Oops! It seems you've stumbled upon uncharted territory. Don't worry;
        you can always return to familiar ground:
      </p>
      {/* It provides a button to go back to the home page. */}
      <Link to="/">
        <button>Go back to Home</button>
      </Link>
    </div>
  );
}
