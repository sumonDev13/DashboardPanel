import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


import '../App.css'

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });
  
      if (response.data.token) {
        
        const token = response.data.token;
        sessionStorage.setItem("token", token);
        navigate('/dashboard')
        
       
     
      }
    } catch (error) {
      // Handle login error, e.g., display an error message to the user
      console.error('Login failed:', error.message);
    }
  };

  
  
  
  
  
  

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
