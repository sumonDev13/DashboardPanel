import  { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
    
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username,
        email,
        password,
      });
  
      if (response.data) {
        
        // const token = response.data;
        // // sessionStorage.setItem("token", token);
        navigate('/login') 
        
     
      }
    } catch (error) {
      // Handle signup error, e.g., display an error message to the user
      console.error('Signup failed:', error.message);
    }
  };
  

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
