import { Link } from "react-router-dom";

export default function NotAuthorized() {
  return (
    <div>
      <h1>403 - Not Authorized</h1>
      <Link to="">Please Login First</Link>
    </div>
  );
}