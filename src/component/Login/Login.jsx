import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back, Traveler 🌍</h2>
        <p className="login-subtitle">Log in to explore your next adventure</p>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="signup-link">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
