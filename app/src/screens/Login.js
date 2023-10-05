import React from 'react'
import Image from "../images/bg_image.png";
import { NavLink } from 'react-router-dom';
export default function Login() {
  return (
    <div className='login-page'>
        <div className='subpage'>
            <div className='bgimg'>
                <img src={Image}/>
            </div>
            <div className='login-form'>
                <div className='just-form'>
                    <h1>Login, Teachers</h1><br/>
                    <p>Doesn't have an account?</p>
                    <NavLink to="/teachers_signup">Sign Up</NavLink><br/>
                    <form action='post'>
                        <br/>
                        <label for="username">Email Address </label><br/>
                        <input type='email' name='username' placeholder='you@example.com' className='inputtags' required/><br/>
                        <br/><label for="Password">Password </label><br/>
                        <input type='password' placeholder='Enter 8 Character or more' name='Password' className='inputtags' required/><br/>
                        <NavLink to="/forgot-password" className="forgot">Forgot Password?</NavLink><br/>
                        <br/>
                        <input type='checkbox' name='remember' className='accept'  required/>
                        <label for='remember' className='labelbox'>  Remember Me
                        </label><br/><br/>
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
