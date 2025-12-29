import "./Page.css";

export default function Login() {
  return (
    <div className="page">
      <h2>Student Login</h2>
      <input placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button>Login</button>
    </div>
  );
}
