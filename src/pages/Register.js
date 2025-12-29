import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    alert(`Register Clicked for ${name}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Student Registration</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ margin: "10px", padding: "10px" }}
      /><br/>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: "10px", padding: "10px" }}
      /><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: "10px", padding: "10px" }}
      /><br/>
      <button onClick={handleRegister} style={{ padding: "10px 20px" }}>Register</button>
    </div>
  );
}

export default Register;
