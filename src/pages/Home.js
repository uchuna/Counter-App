import React from "react";
import { Link } from "react-router-dom";
import ErrorBoundaryTest from "../component/ErrorBoundaryTest";
import { ErrorBoundary } from "react-error-boundary";

// This is the home page of the Counter App.
function Home() {
  return (
    <>
      {/* The ErrorBoundary component surrounds the content to handle any unexpected errors. */}
      <ErrorBoundary
        fallback={
          <p style={{ textAlign: "center", marginTop: "10%" }}>
            <h1>
              Oops! Something went wrong{" "}
              <span style={{ fontSize: "3rem" }}>😵</span>
            </h1>
            <p>
              We apologize for the inconvenience. It seems like something
              unexpected occurred. You can return to safety by clicking the link
              below:
            </p>
            <Link to="Home">Go back to Home</Link>
          </p>
        }
      >
        {/* It includes a welcome message and links to other pages. */}
        <section style={{ marginTop: "5%" }}>
          <h1 style={{ textAlign: "center" }}>
            🚀 Welcome to the Counter App! 🚀
          </h1>{" "}
          <br />
          <p>
            Get ready to embark on a counting adventure like never before. This
            app is all about numbers, fun, and a bit of exploration! 🌟
          </p>
          <p>
            Discover our amazing features and journey through the app by
            clicking these links:
          </p>
          <ul>
            <li>
              <strong>🔢 Counter Page</strong>: Boost, decrease, and reset
              numbers with just a click...
              <Link to="CounterPage" className="count-link">
                Counter Page
              </Link>
            </li>{" "}
            <br />
            <li>
              <strong>🔍 404 Page</strong>: What happens when you explore the
              unknown?...
              <Link to="aplejuice">404 Page</Link>
            </li>
          </ul>
          <ErrorBoundaryTest />
          <br />
          <p>
            🎉 Unleash your inner mathematician and enjoy your journey through
            the Counter App!
          </p>
        </section>
      </ErrorBoundary>
    </>
  );
}
export default Home;
