import React from 'react';
import './login.scss';
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="form-content">
          <h1>LGF Admin</h1>
          <h3>Login</h3>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" />
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
            <button type="submit" className="btn btn-primary">Login</button>
            </Link>
          </form>
        </div>
      </div>
      <div className="login-image">
        <div className="image-card">
          {/* Your image content */}
          <img src="./login.svg" alt="Login" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
