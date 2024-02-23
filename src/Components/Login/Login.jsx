import React, { useState } from 'react';
import './Login.css'
import {BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import axios from 'axios';

function Login({history}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3100/login', {
          email,
          password
        });
        localStorage.setItem('token', response.data.token);
        history.push('/adduser.jsx');
      } catch (error) {
        console.error('Login failed:', error);
        // Handle login failure, e.g., show error message to the user
      }
    };
   

    return (
        <div className='logindataa' >
          
            <h2>Login</h2>
            <form className='landinglogins' onSubmit={handleSubmit} >
                
                <label htmlFor="name">Enter your email</label>
                <input type="email" placeholder="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className='centre'>
              <button type='submit'>Login</button>  
                </div>
                
            </form>
        </div>
    );
};

export default Login;
