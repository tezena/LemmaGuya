import React, { useState, useContext } from 'react';
import './login.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../context/AuthenticationContext';


const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthentication();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await login(username, password); 
      navigate('/home'); 
    } catch (error) {
      console.error('Login error:', error);
     
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="form-content">
          <h1>LGF Admin</h1>
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
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
