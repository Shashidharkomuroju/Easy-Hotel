import React, { useState } from "react";
import "./LoginStyle.css";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

 
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    

    if (storedUserData){
      if(email === storedUserData.email && password === storedUserData.password){
        onLogin();
        navigate("/landing")
      }else{
        setError("Invalid email or password")
      }
    }else{
      setError("No user registered. Please register first.")
    }
  };

  return (
    <div className="login-page">
      <h3>Login</h3>
      <p>Login to access your account</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="form-login">
        <form onSubmit={handleLogin}>
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
          <div className="input-box1">
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
          <button type="submit">Login</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default LoginPage;
