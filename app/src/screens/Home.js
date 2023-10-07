import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
      <div className='teacher'>
        <div className='innert'>
          <h1>For Teachers</h1><br/>
          <p>This is for teachers to conduct quizes and mock tests for the students. This is for the professionals who teaches quantitative aptitude and logical reasoning.</p><br/>
          <NavLink to="/teachers_login" className="tlog">Login</NavLink><br/>
          <p>Don't have an account?</p>
          <NavLink to="/teachers_signup" className="tsign">Sign Up</NavLink>
        </div>
      </div>
      <div className='student'>
        <div className='inners'>
          <h1>For Students</h1><br/>
          <p>Aptitude testing helps students identify their natural strengths and weaknesses, enabling better career choices and academic success.</p><br/>
          <NavLink to="/login" className="tlog">Login</NavLink><br/>
          <p>Don't have an account?</p>
          <NavLink to="/signup" className="tsign">Sign Up</NavLink>
        </div>
      </div>
    </div>
  )
}
