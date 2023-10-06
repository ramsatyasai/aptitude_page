import React, { useState } from 'react';
import Image from '../images/bg_image.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup_teachers() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    institution: '', 
    password: '',
    userType:'teacher',
    confirm: '',
    tandc: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        toast('SignUp Successfull, Go back!!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        console.log(formData);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error(error);
      
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <div className='main-signup'>
      <div className='image1'>
        <img src={Image} alt="Background" />
      </div>
      <div className='sub-signup'>
        <p>Create a teacher account in</p>
        <h1>AptiLogic Pro</h1><br />
        <form action='post' onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label><br />
          <input
            type='text'
            name='username'
            placeholder='Enter your name'
            className='inputtags'
            value={formData.username}
            onChange={handleChange}
            required
          /><br />
          <label htmlFor='email'>Email</label><br />
          <input
            type='email'
            name='email'
            placeholder='you@example.com'
            className='inputtags'
            value={formData.email}
            onChange={handleChange}
            required
          /><br />
          <label htmlFor='institution'>Institution</label><br />
          <input
            type='text'
            name='institution'
            placeholder='Enter your institution'
            className='inputtags'
            value={formData.institution}
            onChange={handleChange}
            required
          /><br />
          <label htmlFor='password'>Password</label><br />
          <input
            type='password'
            name='password'
            placeholder='Min of 8 characters'
            className='inputtags'
            value={formData.password}
            onChange={handleChange}
            required
          /><br />
          <label htmlFor='confirm'>Confirm Password</label><br />
          <input
            type='password'
            name='confirm'
            placeholder='Re-enter the password'
            className='inputtags'
            value={formData.confirm}
            onChange={handleChange}
            required
          /><br /><br />
          <input
            type='checkbox'
            name='tandc'
            checked={formData.tandc}
            onChange={handleChange}
            required
          />
          <label htmlFor='tandc' className='tac'>
            I accept the terms & conditions.
          </label><br /><br />
          <button type='submit'>Signup</button>
        </form>
      </div>
    </div>
  );
}
