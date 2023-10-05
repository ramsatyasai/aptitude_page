import React from 'react'
import Image from '../images/bg_image.png';

export default function Signup_teachers() {
  return (
    <div className='main-signup'>
        <div className='image1'>
            <img src={Image}/>
        </div>
        <div className='sub-signup'>
            <p>Create a student account in</p>
            <h1>AptiLogic Pro</h1><br/>
            <form action='post'>
                <label for="username">Username</label><br/>
                <input type='text' name='username' placeholder='Enter your name' className='inputtags' required/><br/>
                <label for='mail'>Email</label><br/>
                <input type='email' name='mail' placeholder='you@example.com' className='inputtags' required/><br/>
                <label for='institute'>Qualification</label><br/>
                <select>
                    <option value="" selected disabled>Select your qualification</option>
                    <option value='tenth'>10th</option>
                    <option value='inter'>Intermediate</option>
                    <option value='btech'>B.Tech</option>
                    <option value='mtech'>M.Tech</option>
                </select><br/>
                <label for='password'>Password</label><br/>
                <input type='password' name='password' placeholder='Min of 8 characters' className='inputtags' required/><br/>
                <label for='confirm'>Confirm Password</label><br/>
                <input type='password' name='confirm' placeholder='Re-enter the password' className='inputtags' required/><br/><br/>
                <input type='checkbox' name='tandc' required/>
                <label for='tandc' className='tac'>I accept to the terms & conditions.</label><br/><br/>
                <button type='submit'>Signup</button>
            </form>
        </div>
    </div>
  )
}