import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="content-section not-found-page">
      <p className="section-label">PAGE NOT FOUND</p>
      <h1>404</h1>
      <h2>Oops! This page doesn’t exist.</h2>
      <p>
        The page you’re looking for may have moved or the URL may be incorrect.
      </p>

      <Link className="button button-primary" to="/">
        Return to Home
      </Link>
    </main>
  );
}

export default NotFound;
