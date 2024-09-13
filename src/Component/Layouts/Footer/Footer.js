import React from 'react'
import './Footer.css'
import instagram_logo from '../../../Assets/instagram_icon.png'
import whatsapp_logo from '../../../Assets/whatsapp_icon.png'
import footer_logo from '../../../Assets/read.png'
import facebook_logo from '../../../Assets/facebook-circle-line1.png'

export const Footer = () => {
  return (
    <section className='footer-container'>
       <hr/>
        <div className='footer-logo'>
        <img src={footer_logo}/>
        <p>Book Hub</p>
        </div>
        <ul className='footer-links'>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
                  <img src={instagram_logo}/>
            </div>
            <div className='footer-icon-container'>
                  <img src={facebook_logo}/>
            </div>
            <div className='footer-icon-container'>
                  <img src={whatsapp_logo}/>
            </div>
        </div>
    </section>
  )
}
