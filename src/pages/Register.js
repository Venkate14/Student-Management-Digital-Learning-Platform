import "./Page.css";

export default function Register() {
  return (
    <div className="page">
      <h2>Student Registration</h2>
      <input placeholder="Name" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button>Register</button>
    </div>
  );
}
