import React, { useState } from "react";
import "./LoginStyle.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && email && password) {
      const userData = {
        username,
        email,
        password,
      };
      localStorage.setItem("user", JSON.stringify(userData))
      navigate("/login");
    } else {
      setError("All fields are required");
    }
  };
  return (
    <div className="login-page">
      <h3>Register Page</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="form-login">
        <form onSubmit={handleRegister}>
          <div className="input-box">
            <label>Username </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="UserName"
              required
            />
          </div>
          <div className="input-box">
            <label>Email </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              required
            />
          </div>
          <div className="input-box">
            <label>Password </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="btn-1">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
