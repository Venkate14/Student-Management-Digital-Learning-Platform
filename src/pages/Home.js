import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to Smart Learning Platform</h1>
      <p>Learn. Pay. Grow.</p>
      <Link to="/login">
        <button style={{ margin: "10px", padding: "10px 20px" }}>Login</button>
      </Link>
      <Link to="/register">
        <button style={{ margin: "10px", padding: "10px 20px" }}>Register</button>
      </Link>
    </div>
  );
}

export default Home;
