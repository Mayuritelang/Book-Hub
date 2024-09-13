import React from 'react'
import { Navbar } from '../../Component/Layouts/Navbar/Navbar'
import './Signup.css'
import { Link } from 'react-router-dom'
import { AuthForm } from '../../Component/forms/AuthForm/AuthForm'

export const Signup = () => {
  return (
    <section>
      <Navbar darkTheme={true} />
      <div className='signup'>
        <div className='signup-container'>
          <h1 className='sign-up-head'>Sign Up</h1>
          <AuthForm buttonName="Sign Up" showNameField={true} />
          <p className='login-login'>Already have an account? <Link to="/login" className='login-here'>Login here</Link></p>
          <div className='loginsignup-agree'>
            <input type='checkbox' name='' id='' />
            <p>By continuing, I agree to terms of use and privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
