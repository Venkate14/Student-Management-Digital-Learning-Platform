import "./Page.css";

export default function Home() {
  return (
    <div className="page">
      <h1>Student Digital Learning Platform</h1>
      <p>Full Stack Project with Payment & AI Chatbot</p>
      <div>
        <a href="/login"><button>Login</button></a>
        <a href="/register"><button style={{ marginLeft: 10 }}>Register</button></a>
      </div>
    </div>
  );
}
