import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful! You can now log in.");
      setError("");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setError(error.message.Firebase);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Register</h1>
      <form onSubmit={handleSignup}>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", width: "300px", margin: "10px 0" }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", width: "300px", margin: "10px 0" }}
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
