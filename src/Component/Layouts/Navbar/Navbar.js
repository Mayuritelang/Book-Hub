import React, { useState, useContext } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../../App';
import  Cart from '../../../Assets/cart_icon.png'
import {getAuth, signOut} from "firebase/auth"
import app from '../../../Firebase/Firebase';

export const Navbar = ({darkTheme}) => {

  const [navlist, setNavlist] = useState(false);
  const user = useContext(userContext);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const toggleMenu = () =>{
    setNavlist(!navlist);
  } 

  const handleLogout = () => {
       signOut(auth).then(() => {
          navigate("/")
       }).catch((err) => {
        console.log(err)
       })
  }

  const showLoginAndSignup = (
    <nav className={`nav-links ${navlist ? 'open': ''}`}>
    <Link to="/" className='nav-link'>Home</Link>
    <Link to="/book" className='nav-link'>Books</Link>
    <Link to="/about" className='nav-link'>About</Link>
    <Link to="/login" className='nav-link'>Login</Link>
    <Link to="/signup" className='nav-link'>Sign-up</Link>
 </nav>
  )

  const showLogoutAndCart = (
    <nav className={`nav-links ${navlist ? 'open': ''}`}>
    <Link to="/" className='nav-link'>Home</Link>
    <Link to="/book" className='nav-link'>Books</Link>
    <Link to="/about" className='nav-link'>About</Link>
    <a onClick={handleLogout}  className='nav-link'>Logout</a>
    <Link to={"/cart"}><img className='cart-img' src={Cart}/></Link>
 </nav>
  )

  return (
    <section className={`navbar-container  ${darkTheme ? 'background-dark relative' : 'background-transperant'}`}>
       <div className='container flex align-item justify-content'>
             <a href='#' className='logo'>Book Hub</a>
             <button className='toggleButton' onClick={toggleMenu}>☰</button>
             {user ? showLogoutAndCart : showLoginAndSignup}
        </div>
    </section>
  )
}
