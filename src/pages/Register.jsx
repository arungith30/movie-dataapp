import React from "react";

const Register = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Register</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Name"
            style={{ padding: "10px", width: "300px", margin: "10px 0" }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            style={{ padding: "10px", width: "300px", margin: "10px 0" }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            style={{ padding: "10px", width: "300px", margin: "10px 0" }}
          />
        </div>
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
