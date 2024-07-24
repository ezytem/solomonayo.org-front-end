// src/components/auth/Register.jsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./auth.css"; // Ensure this path is correct

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/auth/register", { email, password });
      history.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="auth-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
