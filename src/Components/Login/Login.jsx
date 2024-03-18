import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import myDraw2 from '../Login/images/draw2.webp'
import './Login.css';
import swal from 'sweetalert2';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [passworderror, setPassworderror] = useState('')
    const navigate = useNavigate();

    const validateemail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!value) {
            setEmailerror('please enter your email')
        } else if (!emailRegex.test(value)) {
            setEmailerror("invalid Mail")
        } else {
            setEmailerror('')
        }
    }
    const validatepassword = (value) => {
        const passwordRegex = /^.{6,}$/

        if (!value) {
            setPassworderror('Enter your password')
        } else if (!passwordRegex.test(value)) {
            setPassworderror('Enter Valid Password')
        } else {
            setPassworderror('')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
        if (!email) {
            setEmailerror('Please enter your email');
        }
        if (!password) {
            setPassworderror('Please enter your password');
        }
        return;
    }
    if (emailerror || passworderror) {
        return;
    }
        try {
            const response = await axios.post('http://localhost:3100/login', {
                email: email,
                password: password
            }, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
               
            });






            if (response.data.success) {
                const token = response.data.data;
                localStorage.setItem('token', token);
                
                swal.fire({
                    icon:"success",
                    title:"Success",
                    text:response.data.message
                }).then(()=>{
                    navigate('/admin');
                })

               
            } else {
                swal.fire({
                    icon:"error",
                    title:"error",
                    text:"invalid email or password"
                })
            }
        } catch (error) {
            
            swal.fire({
                icon:"error",
                title:"error",
                text:"invalid email or password"
            })
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            setEmailerror('Please enter your email');
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:3100/reset-password', {
                email: email,
            });

            if (response.status === 200) {
                swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Password reset link has been sent to your email"
                });
            } else {
                swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Failed to send reset link. Please try again later."
                });
            }
        } catch (error) {
            console.error('Error:', error);
            swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to send reset link. Please try again later."
            });
        }
    };




    return (

        <div className='loginform'>

            <div className='loginimage'>
                <img src={myDraw2} alt="#" />
            </div>

            <div className='logindataa' >

                <h2>Login</h2>
                <form className='landinglogins' onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="name">Enter your email</label>
                        <input type="email" placeholder="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value); validateemail(e.target.value) }} />

                        {emailerror && <p className="error-message">{emailerror}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Enter Your Password</label>
                        <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => { setPassword(e.target.value); validatepassword(e.target.value) }} />
                        {passworderror && <p className="error-message">{passworderror}</p>}
                    </div>



                    <div className='centre'>
                        <button type='submit'>Login</button>
                    </div>

                    <div>
                        <button type='button' onClick={handleForgotPassword}>Forgot Password?</button>
                    </div>

                </form>
            </div>


        </div>


    );
};

export default Login;
