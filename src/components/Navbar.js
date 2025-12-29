import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#0077b6", color: "white" }}>
      <h2 style={{ display: "inline", marginRight: "20px" }}>Smart Learning</h2>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
      <Link to="/register" style={{ margin: "10px", color: "white" }}>Register</Link>
      <Link to="/dashboard" style={{ margin: "10px", color: "white" }}>Dashboard</Link>
    </nav>
  );
}

export default Navbar;
