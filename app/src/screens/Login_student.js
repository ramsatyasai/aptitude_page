import React, { useState } from 'react';
import Image from "../images/bg_image.png";
import { NavLink,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate('/numbersystem'); 
        toast('Welcome to AptiLogicPro!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='login-page'>
      <div className='subpage'>
        <div className='bgimg'>
          <img src={Image} alt="Background" />
        </div>
        <div className='login-form'>
          <div className='just-form'>
            <h1>Login, Students</h1><br />
            <p>Doesn't have an account?</p>
            <NavLink to="/signup">Sign Up</NavLink><br />
            <form action='post' onSubmit={handleSubmit}>
              <br />
              <label htmlFor="email">Email Address</label><br />
              <input
                type='email'
                name='email'
                placeholder='you@example.com'
                className='inputtags'
                value={formData.email}
                onChange={handleChange}
                required
              /><br />
              <br /><label htmlFor="password">Password</label><br />
              <input
                type='password'
                name='password'
                placeholder='Enter 8 Characters or more'
                className='inputtags'
                value={formData.password}
                onChange={handleChange}
                required
              /><br />
              <NavLink to="/forgot-password" className="forgot">Forgot Password?</NavLink><br />
              <br />
              <input
                type='checkbox'
                name='remember'
                className='accept'
                required
              />
              <label htmlFor='remember' className='labelbox'>  Remember Me
              </label><br /><br />
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
