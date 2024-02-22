import React, { useState } from 'react';
import './Login.css'
import {BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   

    return (
        <div className='logindataa' >
          
            <h2>Login</h2>
            <form className='landinglogins'>
                <label htmlFor="name">Enter your UserName</label>
                <input type="text" placeholder="Username" name='name' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className='centre'>
              <button> <Link to={'/adduser'}>Login</Link></button>  
                </div>
                
            </form>
        </div>
    );
};

export default Login;
