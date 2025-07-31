import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h2>404 - Page Not Found</h2>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <Link to="/">Go back home</Link>
  </div>
);

export default NotFound;
