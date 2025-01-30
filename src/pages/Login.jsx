import React, { useState } from "react";
import "../styles/login.css"; 
import google from "../assets/img/google.png"
import facebook from "../assets/img/facebook.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();``
    // Handle login logic here
    console.log("Login:", { email, password });
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Email or Phone"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">LOGIN</button>
        </form>
        <div className="social-login">
          <p>Atau login dengan</p>
          <div className="social-buttons">
            <button type="button">
              <img src={google} alt="Google" />
            </button>
            <button type="button">
              <img src={facebook} alt="Facebook" />
            </button>
          </div>
        </div>
        <p>or</p>
        <a href="/register" className="register-link">
          Register
        </a>
      </div>
    </div>
  );
};

export default Login;
