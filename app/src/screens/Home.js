import React from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home'>
      <div className='teacher'>
        <h1>For Teachers</h1><br/>
        <p>This is for teachers to conduct quizes and mock tests for the students. This is for the professionals who teaches quantitative aptitude and logical reasoning.</p><br/>
        <NavLink to="/logint" className="tlog">Login</NavLink><br/>
        <p>Don't have an account?</p>
        <NavLink to="/signupt" className="tsign">Sign Up</NavLink>
      </div>
      <div className='student'>
        <h1>For Students</h1><br/>
        <p>Aptitude testing helps students identify their natural strengths and weaknesses, enabling better career choices and academic success.</p><br/>
        <NavLink to="/login" className="tlog">Login</NavLink><br/>
        <p>Don't have an account?</p>
        <NavLink to="/signup" className="tsign">Sign Up</NavLink>
      </div>
    </div>
  )
}
