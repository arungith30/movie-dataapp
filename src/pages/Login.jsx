import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");

      // Redirect to the favorites or another route after successful login
      navigate("/favorites");
    } catch (error) {
      setError(error.message);
      alert("Login failed! Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            style={{ padding: "10px", width: "300px", margin: "10px 0" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            style={{ padding: "10px", width: "300px", margin: "10px 0" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            backgroundcolor: "#446284",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
