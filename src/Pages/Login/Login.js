import React from 'react'
import { Navbar } from '../../Component/Layouts/Navbar/Navbar'
import './Login.css'
import { Link } from 'react-router-dom'
import { AuthForm } from '../../Component/forms/AuthForm/AuthForm'

export const Login = () => {
  return (
    <section>
    <Navbar darkTheme={true}/>
   <div className='login'>
    <div className='login-container'>
      <h1  className='login-head'>Login</h1>
       <AuthForm buttonName="Login" showNameField={false}/>
      <p className='signup-login'>Create an account? <Link to="/signup" className='sign-up-here'>Sign-up here</Link></p>
    </div>
</div>
</section>

  )
}
